## Start
```
$ cargo install loco-cli
$ cargo install sea-orm-cli
```

You need:

* A local postgres instance
* A local Redis instance

Check out your development [configuration](config/development.yaml).

> データベースのセットアップコマンド 
<code>loco:loco</code> and a db named <code>[app name]_development.</code>: 
<code>docker run -d -p 5432:5432 -e POSTGRES_USER=loco -e POSTGRES_DB=[app name]_development -e POSTGRES_PASSWORD="loco" postgres:15.3-alpine</code>

> redis のセットアップコマンド
<code>docker run -p 6379:6379 -d redis redis-server</code>: 

Now start your app:

```
$ cargo loco start
Finished dev [unoptimized + debuginfo] target(s) in 21.63s
    Running `target/debug/myapp start`

    :
    :
    :

controller/app_routes.rs:203: [Middleware] Adding log trace id

                      ▄     ▀
                                 ▀  ▄
                  ▄       ▀     ▄  ▄ ▄▀
                                    ▄ ▀▄▄
                        ▄     ▀    ▀  ▀▄▀█▄
                                          ▀█▄
▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄ ▀▀█
 ██████  █████   ███ █████   ███ █████   ███ ▀█
 ██████  █████   ███ █████   ▀▀▀ █████   ███ ▄█▄
 ██████  █████   ███ █████       █████   ███ ████▄
 ██████  █████   ███ █████   ▄▄▄ █████   ███ █████
 ██████  █████   ███  ████   ███ █████   ███ ████▀
   ▀▀▀██▄ ▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀ ██▀
       ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

started on port 3000
```

## フロントエンド
```
cd frontend
npm i
npm run build
-> 再度 loco を起動 ($ cargo loco start)
npm run dev (react 側の確認)
```

## Getting help

Check out [a quick tour](https://loco.rs/docs/getting-started/tour/) or [the complete guide](https://loco.rs/docs/getting-started/guide/).
