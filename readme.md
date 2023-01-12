# @itkyk/accounts-manager

## Use
```bash
# install
npm i -g @itkyk/account-manager

# run
npx account
```

## Options
| key | description                                                                                                                               |
|------|-------------------------------------------------------------------------------------------------------------------------------------------|
| -w, --write | when want to add accont data, use this option.<br/>ex) `npx account -w`                                                                   |
| -d, --delete | when you want to delete registered data.<br/>ex) `npx account -d`                                                                         |
| -f, --filter | when you want to search and display a list. Valid in normal mode and `-d` mode.<br/>ex)`npx account -f hoge`<br/>`npx account -d -f hoge` |
| -v, --version | check package version<br/>ex) `npx account -v`                                                                                            | 
| -u, --update | update account data fromat<br/>ex) `npx account -u`                                                                                       |
| -o, --open | when you want to open a file that stores data. <br/>Open `~/.itkyk_accounts.json`.                                                        |          