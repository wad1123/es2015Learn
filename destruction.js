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