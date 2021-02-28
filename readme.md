## Git commands

git init - inicia o repositório

git remote / git remote -v  - manage set of tracked repositories  -v stands for verbose

git status - vê o que foi added e o que não foi

git add filename - adiciona o filename para fazer commit

git add . - adiciona tudo para fazer commit

git commit -a -m "message"   -a -> shortcut se quisermos fazer commit logo de ficheiros modified, não de new files.

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