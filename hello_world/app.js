const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url){
  ajax.open('GET',url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed(){
  const newsFeed = getData(NEWS_URL);
  const newsList = [];
  
  newsList.push('<ul>');
  
  for(let i=0; i<10; i++){
  
    newsList.push( `
      <li>
        <a href= "#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `);
  }
  
  newsList.push('</ul>');
  
  container.innerHTML = newsList.join('');


}

function newsDetail (){
  const id = location.hash.substring(1);
  
  const newsContent = getData(CONTENT_URL.replace('@id',id))
  
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
  
    <div>
      <a href="#">목록으로</a>
    </div>
  `;
  
  // title.innerHTML = newsContent.title
  // content.appendChild(title);


}

function router (){ //화면 전환하는걸 구현해주면 된다. (화면전환목적)
  const routerPath = location.hash;

  if (routerPath === ''){
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange',router);

router();