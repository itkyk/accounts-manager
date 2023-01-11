# @itkyk/accounts-manager

## Use
```bash
# install
npm i -g @itkyk/account-manager

# run
account
```

## Options
| key | description                                                                                                                       |
|------|-----------------------------------------------------------------------------------------------------------------------------------|
| -w, --write | when want to add accont data, use this option.<br/>ex) `account -w`                                                               |
| -d, --delete | when you want to delete registered data.<br/>ex) `account -d`                                                                     |
| -f, --filter | when you want to search and display a list. Valid in normal mode and `-d` mode.<br/>ex)`account -f hoge`<br/>`account -d -f hoge` |
| -o, --open | when you want to open a file that stores data. <br/>Open `~/.itkyk_accounts.json`.                                                |          