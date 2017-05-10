{
	let string = 'hello ES2015~';
	console.log( string.includes( 'ES2015' ) );
	console.log( string.includes( 'ES2015',6 ) );
	console.log( string.includes( 'ES2015',7 ) );
}
{
	let url = 'baidu.com/index.html';
	console.log( url.startsWith( 'index',10 ) );
	console.log( url.startsWith( 'index',11 ) );
}