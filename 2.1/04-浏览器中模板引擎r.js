<html>
<head>
	<title>index</title>
</head>
<body>
     index
     <script type="text/javascript" src="node_modules/art-template/lib/template-web.js"></script>
     <script type="text/template" id='tpl'>
            姓名：{{name}}
            年龄：{{age}}
            来自:{{province}}
            我喜欢：{{each hobbies}} {{$value}} {{/each}}
     </script>
     <script type="text/javascript">
            var ret = template('tpl',{
            	name:'lxy',
            	age:24,
            	province:'北京'
            	hobbies:[
                   '唱歌','学习'
            	]
            })
     </script>
</body>
</html>