  export async function render(container, routes){
    const path = location.pathname;
    container.innerHTML = ``;
    let content = routes[path];
    console.log('Current path:', path); // DEBUG


    if(!content){
      if(path.startsWith('/bookmarks/')&&path.split('/').length===3){
        content=routes['/bookmarks/:id'];
        console.log('Found dynamic route:', content); // DEBUG


      }else if(path.startsWith('/search/')&&path.split('/').length===3){
        content = routes['/search/:id'];
        console.log('Found dynamic route:', content);
      }
    }

    if(!content){
      container.innerHTML =  `
      <div class="container" style="position: relative">
      <h1 style="color:white;text-align: center;font-size: 30px;">Sorry... 404</h1>
  </div>
      
      
      `;
      return;
    }
    if(typeof content ==='function'){
      const result = await content();
      console.log('Result from function:', result); // DEBUG
      if(result) {
        container.appendChild(result);
      } else {
        console.error('Function returned undefined!'); // DEBUG
      }

    }
    else if (content instanceof HTMLElement) {
      // якщо випадково передали DOM без функції
      container.appendChild(content);
    }
    else container.innerHTML = content;
  }