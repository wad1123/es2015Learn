{
	function showInfo( info = 'hello' ){
		console.log( info );
	}

	showInfo();
}

{
	let showInfo = function( { info = 'zhangsan' } ){
		console.log( info );
	}
	showInfo( {} );
}

{
	let showInfo = function( { info = 'zhangsan' } = {} ){
		console.log( info );
	}
	showInfo();
	showInfo( { info:'lisi' } );
}

{
	let showInfo = function( { info:mes = 'zhangsan' } = {} ){
		console.log( mes );
	}
	showInfo({ info:'lisi' });
}

{
	let showInfo = function( ...rest ){
		console.log( rest );
	}
	showInfo( 1,2,3,4,5 );
}

{
	let arr = [ 1,2,3,4 ];
	let showInfo = function( ...rest ){
		console.log( rest );
	}
	showInfo( ...arr );
}

{
	let arr = [ 'zhangsan','lisi' ];
	let showInfo = function( name1,name2 ){
		console.log( name1,name2 );
	}
	showInfo( ...arr );
}

{
	let numArr = [ 1,2,3 ],
	strArr = [ 'name','age' ],
	newArr = [ ...numArr,...strArr ],
	arr = [];
	arr.push( ...newArr );

	console.log( newArr ); 
	console.log( arr );
}