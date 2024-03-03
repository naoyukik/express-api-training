# express API sample

## デプロイ

```shell
cp ./.env.example ./.env
npm i
npx prisma generate
npx prisma db push
```

## スタート

```shell
npm run start
```

## HTTPクライアントを使った確認方法

### HTTPクライアントをインストール(VSCodeの場合)

1. VSCodeに[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)をインストール

### 確認手順

1. httpRequest/request.httpファイルを開く
2. `1.`の`send Request`をクリック
3. 右ペインに結果を確認
4. 右ペインのidの値をコピー
5. `2.`のPUTのidに値をペースト
6. `2.`の`send Request`をクリック

あとは順番に3以降も同様に繰り返して値を見る

存在しない1.以外で設定すると404が返ってくる