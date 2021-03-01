## Git commands

git init - inicia o repositório

git remote / git remote -v  - manage set of tracked repositories  -v stands for verbose

git status - vê o que foi added e o que não foi

git add filename - adiciona o filename para fazer commit

git add . - adiciona tudo para fazer commit

git commit -a -m "message"   -a -> shortcut se quisermos fazer commit logo de ficheiros modified, não de new files.

git commit -am "message" - shortcut do supramencionado.

git commit -m "message" - fazer commit a aquilo que foi added. tem de ter mensagem que descreva o que foi commit ou o porquê do commit

git log - log os vários commits do repositório



## heroku commands

heroku --version - check if instaled

heroku login

heroku create or heroku create name

git push heroku master - remote name is heroku, to connect git with heroku, so he can run the code

heroku open - opens the link of our app

heroku logs - view server logs


## npm commands

npm install --production - only instals dependencies

npm install - install all dependencies and devDependencies

## firebase commands

firebase.database() - access database funcionalities of the firebase module

.ref() - reference to a specific part of the database. If no arguments are provided, ref points to the root (expensify-b9ec9-default-rtdb)

.set() - set value for the ref. Accepts any data type - string, number.. etc. It's assynchronous, has to send data to server. while doing that, it reads the next lines on the code


## promises

Can only do ONE resolve OR reject. If we pass two resolves, only the first will run. 

Resolve: only takes one argument. If needed, pass an object with the properties.
Reject: only takes one argument.

.then(()=>{}) - only fires for resolves. For rejects, throws a javascript error. to handle error, add .catch(()=>{})