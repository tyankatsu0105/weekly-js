
# 20200309

todoアプリを作る

jsで操作する箇所は、単一の要素であればidを振り、複数の場合はclassを振った。idは単一の要素なので、getElementでの取得が高速であるので、できる限りidを触れる箇所はidにした。
textの中が殻だった場合、alertを出して早期returnさせた。中身が無いと意味がないため。
イベントハンドラのonclickでhandleSubmit関数を実装し、DOMの生成を行わせ、最後にjs--listの末尾に足すようにした。
buttonに対象要素の削除機能を足すために、handleClickの中でhandleClose関数を作成し、buttonのクリックで自身を削除する関数をもたせた。
最初に、[MutationObserver](https://developer.mozilla.org/ja/docs/Web/API/MutationObserver)を使って、ulのchildListが更新されるたびにすべてのliのbuttonにイベントハンドラをもたせるように更新する処理を書いたが、それだと無駄な処理が走ってしまう（onclickにhandleCloseをすでに持っている要素に再度もたせることになる）ので、やめた。

```js
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    // list remove
    Array.from(listItems).map(listItem => {
      const closeBtn = listItem.querySelector(".js--close");

      const handleClose = () => {
        listItem.remove();
      };

      closeBtn.onclick = handleClose;
    });
  });
});

const config = { childList: true };
observer.observe(list, config);
```