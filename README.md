## let 
		let 创建块级作用域，同作用域下不可重复声明变量，但是不同作用域下可以；
        其声明的变量内容和类型可变；
        let声明 不涉及预解析；
        
## Destruction 解构赋值 

		let [ a,b,c ] = [ 1,2,3 ];
            console.log( a,b,c );//1,2,3

            let [ s1,s2,s3 ] = [ 'zhangsan' ];
            console.log( s1,s2,s3 );//'zhangsan',undefined,undefined;
            
            let [ a,,b ] = [ 1,2 ];
			console.log( a,b ) // 1,undefined
            
            *若对应位置无值，则赋值undefined;
            
            let [ w,[ a,[ c ] ],d ] = [ 1,[ 2,[ 3 ] ],4 ];
			console.log( w,a,c,d ); // 1,2,3,4
            
            let [ a = 123,b, c ] = [ ,456,987 ];
			console.log( a,b,c );
            
            *赋值与声明可同时进行，原则上可以同时进行多次赋值声明操作；
            
            let [ a = 1,b = 2, c = 3,d = {} ] = [];
			console.log( a,b,c,d );
            
            *解构赋值中 let 声明必须紧跟赋值操作
            
            let [num];//error
            
            *解构赋值可以做到这些事
            
            let [ x,y ] = [ 1,2 ];
            [ x,y ] = [ y,x ];
            console.log( x,y )//2,1
            
            *两者的值交换了；极大解化了赋值操作；
            
            *对象（键值对）的解构中，{}中的逗号两侧必须有参数（变量）
            
            let { a, } = {a:1};//error
            
            *对象的解构赋值中也可以也设置默认值
            
            let { a = 1,b =2 } = {};//1,2
            
            *对象的解构赋值中支持一种操作--即修改默认的参数名（变量名）；
            
            let { num:number } = { num : 100 };
			console.log( number );//100
            
            *z这样法必须使用修改后的变量名，否则会报错
            
            console.log( num );//error
            
            *对象的解构赋值中还可以做到这些事
            
           class Func {
                constructor(name){
                    this.name = name;
                }	
                sayHello(){
                    console.log( 'hello~' );
                }
            }

            let { name:n } = new Func( 'zhangsan' );
            let { sayHello:hi } = new Func( 'noname' );
            console.log( hi );//[Function: sayHello]
            console.log( n )//'zhangsan'
            
            *解构赋值可以直接拷贝对象原型方法的引用；
            
            let { forEach:each } = new Array;
			console.log( each );//[Function: forEach]
            
            *字符串也可以解构赋值
            
            let [ a,b,c,d,e ] = 'hello';
			console.log( a,b,c,d,e );//'h' 'e' 'l' 'l' 'o'
            
		destruction相当于形式赋值，赋值更加灵活了；
        
## String Extends 字符串扩展 

*includes()*&nbsp;&nbsp;&nbsp;	判断字符串中是否包含特定的子串；
- - -
*statsWith()*&nbsp;&nbsp;&nbsp;	判断字符串是否以特定的子串开始；
- - -
*endsWith()*&nbsp;&nbsp;&nbsp;	判断字符串是否以特定的子串结束；
___
		
        let string = 'hello ES2015~';
            console.log( string.includes( 'ES2015' ) );//true
            console.log( string.includes( 'ES2015',6 ) );//true
            console.log( string.includes( 'ES2015',7 ) );//false
        
  **includes**中包含两个参数，第一个表示要查看的字符串(string)，第二个表示从第几个字符开始查找(number)；
- - -
  查找过程中不会匹配第(number)个字符，而是从第(number+1)个字符开始匹配；
- - -
  返回boolean值；
- - -
  		
        let url = 'baidu.com/index.html';
        console.log( url.startsWith( 'index',10 ) );//true
        console.log( url.startsWith( 'index',11 ) );//false
        
  **startsWith**中也包含两个参数，第一个表示要查找的子串(string)，第二个表示要要从第几个开始查找( nmber );
- - -
  查找过程中不会匹配第(number)个字符，而是从第(number+1)个字符开始匹配；
- - -
  返回boolean值；
- - -
  
  **endsWith**的用法与前者相同；
  
##### *String Model 模板字符串*
- - -
		let json = {
            name:'zhangsan',
            age:18,
            pet:'dog'
        };
        let info = function( info ){ return info; }
        let strModel = `
            <div><span>${json.name}</span><span>${ json.age }</span>	<span>${ 100%35 }</span></div>
            <p>${ info( 'hello ES2015~' ) }</p>
        `;
        console.log( strModel );
        
模板字符串以 ==··== 包裹html片段，并在==${}==中插入表达式(express String)，而不是语句，否则不会生效；(*不能以分号结尾*)；

## Function Extends 函数扩展
- - -
#### *函数参数默认值*
- - -
        function showInfo( info = 'hello' ){
            console.log( info );
        }

        showInfo();//'hello'
        
函数的参数可被指定为默认的值，在函数没有传递参数时，函数会使用默认参数值；
- - -
函数参数默认值的设置也可采用解构赋值的形式
- - -
		let showInfo = function( { info = 'zhangsan' } ){
            console.log( info );
        }
        showInfo( {} );
        
        let showInfo = function( { info = 'zhangsan' } = {} ){
            console.log( info );
        }
        showInfo();
        showInfo( { info:'lisi' } );
        
        let showInfo = function( { info:mes = 'zhangsan' } = {} ){
            console.log( mes );
        }
        showInfo({ info:'lisi' });
        
#### *rest参数*
- - -
		let showInfo = function( ...rest ){
            console.log( rest );
        }
        showInfo( 1,2,3,4,5 );//[1,2,3,4,5]
        
**rest**在此处的作用类似于函数内部的arguments对象；
- - -
其还可以这么用：
- - -
		let showInfo = function( a...rest ){
            console.log( rest );
        }
        showInfo( 1,2,3,4,5 );//[2,3,4,5]
- - -
这样rest就可以将第一个参数独立出来；
- - -
当然它也可以反向利用
- - -
		let arr = [ 'zhangsan','lisi' ];
        let showInfo = function( name1,name2 ){
            console.log( name1,name2 );
        }
        showInfo( ...arr );//'zhangsan','lisi'
- - -
这种做法很像是 **`showInfo.apply( null,arr )`**
- - -
##### `...`   扩展运算符

		let numArr = [ 1,2,3 ],
        strArr = [ 'name','age' ],
        newArr = [ ...numArr,...strArr ],
        arr = [];
        arr.push( ...newArr );

        console.log( newArr ); //[ 1, 2, 3, 'name', 'age' ]
        console.log( arr );// [ 1, 2, 3, 'name', 'age' ]
- - -
`...`运算符可以将数组分解成其每一项的值；