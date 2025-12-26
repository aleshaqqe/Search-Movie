  export async function render(container, routes){
    const path = location.pathname;
    container.innerHTML = ``;
    const content = routes[path];
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
      container.appendChild(result);
    }
    else if (content instanceof HTMLElement) {
      // якщо випадково передали DOM без функції
      container.appendChild(content);
    }
    else container.innerHTML = content;
  }