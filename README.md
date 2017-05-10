## let 
		let 创建块级作用域，同作用域下不可重复声明变量，但是不同作用域下可以；
        其声明的变量内容和类型可变；
        let声明 不涉及预解析；
        
## 解构赋值 destruction

			let [ a,b,c ] = [ 1,2,3 ];
            console.log( a,b,c );//1,2,3

            let [ s1,s2,s3 ] = [ 'zhangsan' ];
            console.log( s1,s2,s3 );//'zhangsan',undefined,undefined;
            
            let [ a,,b ] = [ 1,2 ];
			console.log( a,b ) // 1,undefined
            
            *若对应位置无值，则赋值undefined;
            
            let [ w,[ a,[ c ] ],d ] = [ 1,[ 2,[ 3 ] ],4 ];
			console.log( w,a,c,d ); // 1,2,3,4
            
		相当于形式复制，赋值更加灵活了；