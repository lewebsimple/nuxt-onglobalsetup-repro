import { onGlobalSetup } from '@nuxtjs/composition-api';

export default function (context, inject) {
  console.log('test-plugin')
  onGlobalSetup(() => {
    console.log('onGlobalSetup inside plugin provided by module');
  });
}
