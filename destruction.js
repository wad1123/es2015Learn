{
	let [ a,b,c ] = [ 1,2,3 ];
	console.log( a,b,c );

	let [ s1,s2,s3 ] = [ 'zhangsan' ];
	console.log( s1,s2,s3 );
}
{
	let [ w,[ a,[ c ] ],d ] = [ 1,[ 2,[ 3 ] ],4 ];

	console.log( w,a,c,d );
}
{
	let [ a,,b ] = [ 1,2 ];
	console.log( a,b )
}
{
	let [ a = 123,b, c ] = [ ,456,987 ];
	console.log( a,b,c );
}
{
	let [ a = 1,b = 2, c = 3,d = {} ] = [];
	console.log( a,b,c,d );
}
{
	let [ x,y ] = [ 1,2 ];
	[ x,y ] = [ y,x ];
	console.log( x,y )
}
{
	let json = {
		name:'xiaoming',
		age:25,
		pet:{
			name:'doggie',
			age:2
		}
	}
	let { age } = json;
	console.log( age );
	let { pet } = json;
	console.log( pet );
}
{
	let { a = 1,b = 2 } = {};
	console.log( a,b );
}
{
	let { num:number } = { num : 100 };
	console.log( number );
}