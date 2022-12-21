import { createApp } from 'vue'
import App from './App.vue'
import './base.css'

const app = createApp(App)

app.directive('christmas', (el, binding) => {
  el.classList.add(`christmas-text`);
  switch(binding.arg) {
    case `green`:
      el.classList.add(`green`);
      break;
    case `red`:
      el.classList.add(`red`);
      break;
    default:
      el.classList.add(`red-green`);
  }
  if(binding.value) {
    el.style.animationDuration = `${binding.value}s`;
  }
})

/*
 * Added additionally during stream to explore what is possible with custom directives
 * Loading spinner from https://loading.io/css/
 */
app.directive(`loading-spinner`, el => {
  el.classList.add(`lds-dual-ring`);
});

/*
 * Added additionally during stream to explore what is possible with custom directives
 * Loading spinner from https://loading.io/css/
 */
app.directive(`loading-circle`, (el, binding) => {
  el.classList.add(`lds-circle`);
  const div = document.createElement(`div`);
  if(binding.value) {
    div.style.background = binding.value;
  }
  el.insertAdjacentElement(`afterbegin`, div);
});

/*
 * Added additionally during stream to explore what is possible with custom directives
 * The idea behind this directive was to explore if a CustomButton component could be
 * done as a custom directive instead
 *
 * In practice I probably wouldn't go that way as there is a lot going on in here
 * that is far beyond setting some CSS classes or doing some low level DOM
 * manipulation that can't be done otherwise, but it was fun to explore this
 */
app.directive(`button`, (el, binding) => {
  const errors = [];
  if(!binding.value?.id) {
    errors.push(`id must be set!`);
  }
  if(!binding.value?.text) {
    errors.push(`text must be set!`);
  }
  if(errors.length > 0) {
    console.error(errors.join(` - `));
    return;
  }
  el.classList.add(`custom-button`);
  if(binding.value) {
    if(binding.value.disabled) {
      el.disabled = true;
    }
    el.id = binding.value.id;
    el.insertAdjacentText(`afterbegin`, binding.value.text);
    el.type = binding.value.type ?? `button`;
  }
});

app.mount('#app')
