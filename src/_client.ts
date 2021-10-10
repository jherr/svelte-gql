import { createClient } from '@urql/svelte';

export default createClient({
	url: 'http://localhost:4000'
});
