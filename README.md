## let 
		let 创建块级作用域，同作用域下不可重复声明变量，但是不同作用域下可以；
        其声明的变量内容和类型可变；
        let声明 不涉及预解析；
        
## 解构赋值 destruction

			let [ a,b,c ] = [ 1,2,3 ];
            console.log( a,b,c );

            let [ s1,s2,s3 ] = [ 'zhangsan' ];
            console.log( s1,s2,s3 );
            
		相当于形式复制，赋值更加灵活了；