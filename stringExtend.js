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
{
	let json = {
		name:'zhangsan',
		age:18,
		pet:'dog'
	};
	let info = function( info ){ return info; }
	let strModel = `
		<div><span>${json.name}</span><span>${ json.age }</span><span>${ 100%35 }</span></div>
		<p>${ info( 'hello ES2015~' ) }</p>
	`;
	console.log( strModel );
}