This is Node.js command-line utility that is used to convert content from 
[https://github.com/Omarcito/indestructibleart.com/tree/master/content](https://github.com/Omarcito/indestructibleart.com/tree/master/content) 
(which is a mixture of YAML and HTML) into JSON. 

Clone the repo and CD into the cloned directory:

```
git clone git://github.com/spencercarnage/convert-ia-posts/ && cd convert-ia-posts
```

Install the dependencies:

```
npm i
```

Run `npm link` from inside the new repo. This will give you the command-line 
interface `convert-ia`. There are only two command-line arguments and both are required.

```
-s, --source path/to/dir/of/content/to/convert
-o, ---output path/to/dir/of/where/to/put/converted/content
```

Example:

```
convert-ia -s content/episodes -o converted-episodes
```
