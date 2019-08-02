if [[ ! $(which docker) && ! $(docker  --version) ]]
then
  echo -e "\033[91mPlease install Docker. https://docs.docker.com/install"
  exit
fi

if [[ ! $(which git) && ! $(docker --git) ]]
then
  echo -e "\033[91mPlease install Git. https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
  exit
fi

if [[ ! $(which node) ]]
then
  echo -e "\033[91mPlease install Node."
  exit
fi

if [[ ! $(which npm) ]]
then
  echo -e "\033[91mPlease install npm."
  exit
fi

cd accounts
npm install
cd ..

cd api-docs
npm install
cd ..

cd backend
npm install
cd ..

cd dashboard
npm install
cd ..

cd home
npm install
cd ..

cd status-page
npm install
cd ..

cd probe
npm install
cd ..






