import './style.css';

function init() {
  console.log('init');
  
}

init();

 if (module.hot) {
     module.hot.accept('./index.js', function() {
       console.log('Accepting the updated printMe module!');
       printMe();
     })
   }