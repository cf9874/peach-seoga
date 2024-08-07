# 피치서가 PIXI 기반 라이브러리 인수인계 
목차
1. [실행방법](#실행방법)
2. [자주 사용하는 코드](#자주-사용하는-코드) (반복해서 쓰이나 어떤 의미인지 모를만한 코드 설명)
3. [rollup시 주의사항](#rollup시-주의사항) (bundle파일 생성시 알아둬야 하는 부분)
4. [flow](#flow) ( 파일 구조와 흐름설명)
5. [관리자페이지=저작도구](#관리자페이지) (기획서 화면과 매칭되는 파일명과 주요코드 첨부, 기획서 페이지명과 링크도 첨부했으니 확인바랍니다.)
6. [사용자페이지=스토리뷰어](#사용자페이지) (3번과 동일)


## 실행방법
1. 개발모드
terminal에 입력해주세요
```
yarn dev

```
2. 빌드
```
yarn build
```



## 자주 사용하는 코드
* generateTexture
pixi graphic은 interactive 옵션이 없기때문에 renderer를 통해 textrue를 가져옵니다.  
이를 이용해 sprite를 생성합니다.  
단, addchild하고자하는 application에서 그래픽을 가져와야함니다. (메인 app과 페인트용 app이 따로 있음)  
```
//메인 app에서 사용하는 방법
Manager.app.renderer.generateTexture(graphic)

```
* emit 와 on
    픽시 ui에서 정의한 event emmiter로 on으로 이벤트 부착, emit으로 발생시킬 수 있다.  
    단, PIXI UI를 사용하기 때문에 ineteractive true를 원하면 .sprite 혹은 .container 으로 들어가서 변경해야한다.  
```
    버튼.emit("hover", e)
```
```
    버튼.sprite.interactive = true
```
## rollup시 주의사항
  1. gatsby와 next가 토큰 받아오는 방식이 다릅니다  
  (next.js) 관리자페이지일때 z_nextapi.js의 코드를 복사해 api.js에 붙여넣기 합니다.  
  (gatsby.js) 사용자 페이지일때 z_gatsbyapi.js의 코드를 복사해 api.js를 변경합니다.  
  2. gatsby는 숨겨진 높이가 있어 web.js에서 gatsby용코드 next용코드라고 주석 달아놓은거 참고해 변경해 줍니다.
  3. 번들 적용방법
  사용자페이지는 api.js와 web.js 파일을 gatsby용 api.js와 web.js 파일을 git에 push 해주세요.  
  관리자 페이지는 api.js와 web.js 파일을 next용코드로 변경후 dist폴더 안에 bundle.js 파일을 혜영님한테 보내주세요 (관리자페이지 담당자)  
  4. api.js에 새로운 함수 추가하고 싶으면 z_nextapi, z_gatsbyapi , z_testapi에도 동시에 추가해 주셔야합니다.  

<br>

## flow

구조
* src (js 파일을 추가해 개발합니다.)
  * 글로벌 변수 저장 클래스
    __Manager.js__ (최상위 클래스)
    __Data.js__ (서버데이터 저장클래스)

  * UI
    보편적으로 사용하는 UI들을 미리 만들어놓은 폴더

  * components
    화면 구성요소를 기획서에따라 만들어놓은 폴더 ex) 메뉴바

  * Scene
    components들을 자식으로 가지는 메인 컨테이너 

  * index.js (export할 함수들을 정의합니다.)

* build (테스트용 폴더 yarn dev시 build폴더가 열립니다.)
* dist (배표용 폴더 bundle.js 파일이 생성되는곳)

===================
흐름

Manager클래스 정의 => Manager 클래스의 currentScene을 Loader Scene으로 설정 => Loader Scene에서 admin 인지 client인지 따라 이미지 로드 
  client 일 경우 => WebScene으로 Manager의 currentScene 변경  
  admin 일 경우 => AdminScene으로 Manager의 currentScene 변경

  <br>

## 관리자페이지

* 스토리등록 

1. 로컬에 있는 pdf파일 선택
[스토리관리-스토리뷰어 등록-01](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/d5d3327e-4d6d-458c-9c20-242dee6f9adf/)

     _선택후 티리거 되는 코드_
    __admin.js__
```
 document.querySelector("#pdf_upload").addEventListener("change", function (e) {
    var pdffile = e.target.files[0] //파일 가져옴
    if (pdffile.type != "application/pdf") {
      console.error(pdffile.name, "is not a pdf file.")
      return
    }

    * * * 
    
    fileReader.onload = function () {
      navigateFunc() //next.js 에서 저작도구 페이지로 네비게이션하는 함수 받아서 호출
      var typedarray = new Uint8Array(this.result)//uint8array로 변경해줘야 pdf.js에서 사용가능함
      new webAdmin(typedarray, 0)
    }

```

2. 첫 화면은 모아보기페이지
[스토리관리-스토리뷰어 등록-02](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/62d719f4-ac18-45f6-9214-b6db94e1f6e7/)

     _모아보기페이지 호출하는 부분_
   __AdminScene.js__

    ```
        //모아보기 페이지 생성
        this.scrollThumb = new ScrollThumb(thumbArr, queueRenderPage)
        _con.addChild(this.scrollThumb)
    ```
   __ScrollThumb.js__
    1. 썸네일 선택 하는 경우

    ```
    sp.sprite.interactive = sp.sprite.buttonMode = true
      //썸네일 클릭했을때
      sp.sprite.on("click", () => {
        // 발행상태가 아니라면 필터 off
        if (Data.state !== 0) this.parent.emit("filterOff")
        // 모아보기페이지 removechild
        this.parent.removeChild(this)
        // 해당 인덱스로 페이지 이동
        queueRenderPage(i + 1)
      })
    ```
    2. 스토리 제작하기 버튼 클릭 하는 경우

    ```
    this.editBtn.onClick(() => {
      this.parent.emit("filterOff")
      this.parent.removeChild(this)
      //1페이지로 이동
      queueRenderPage(1)
    })    
    ```

3. 오른쪽 아이콘 클릭 (예시-안내선)
[스토리관리-스토리뷰어 등록-04](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/d1641253-2fd0-4104-aa9a-bbcf9c1f5e96/)
    _안내선 클릭시 이벤트_
__AdminScene.js__
    ```
    // 오른쪽메뉴에 존재하는 아이콘 클릭 이벤트 모음
    addEvent () {
        
        * * *

    this.rightmenu.gridBtn.onClick(() => {
      // 타일그리드의 알파값만 변경
      if (this.tileGrid.alpha === 1) this.tileGrid.alpha = 0
      else this.tileGrid.alpha = 1
    })
      ```

4. 그림단어 팝업
    1. 오른쪽 그림단어 아이콘 클릭하는 경우 (등록)  
    [스토리관리-스토리뷰어 등록-05](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/70857059-ede7-481a-b9a5-6440fee43820/)
    2. 왼쪽 메뉴에서 수정클릭하는 경우 (수정)
    [스토리관리-스토리뷰어 등록-08](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/7169f5d7-2942-4a17-b26f-78ac3bdc9631/)
    
    __CardPopUpContainer.js__
    ```
    export default class CardPopUpContainer extends PIXI.UI.Container {
    constructor () {
        
        * * *
        //처음 등록일때
        let make = new cardscrollCon()
        this.card = make
        
        * * *
        //그림단어 수정일때
        let edit = new editScroll()
    ```

5. 그림단어 선택시
    _카드리스트 전역변수에 추가함_
     __CardPopUpContainer.js__
    ```
    enrollBtn.onClick(() => {
      //리스트에 있는 모든것 push
      Data.cardArr.push(...this.selectedListCon.children)
      this.parent.parent.emit("selectCard")
      this.parent.container.emit("close")
    })
    ```

    _왼쪽 메뉴바에 추가_
    [스토리관리-스토리뷰어 등록-07](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/e081ed24-2d41-414c-b12c-45da3c218481/)

    __LeftmenuAdmin.js__

    ```
    //그림단어 밑에 들어가는 콘테이너
    makeCardContainer () {

      * * *
      //카드 갯수만큼 생성
       for (let i = 0; i < Clist.length; i++) {
    ```

    _돋보기 아이콘 생성_
    [스토리관리-스토리뷰어 등록-10](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/c41ce778-ac62-4a97-9036-0e1f1c3f3d1b)

    그림단어 리스트 중 한 아이템 클릭시 만들어진적 없다면 dragSprite생성한다
     __LeftmenuAdmin.js__
    ```
    makeCardContainer () {

      * * *
       base.sprite.on("click", () => {
        if (d === undefined) {
          d = dragSprite(Clist[i].title, border)
          this.addChild(d)
          Clist[i].list[now] = d
          return
        }
    ```
      __dragSprite.js__
    ```
      /*
      드레그가 가능한 돋보기 스프라이트
      */
      export function dragSprite (title, mather) { }
    ```

  6. 음성 팝업
    1. 오른쪽 음성 아이콘 클릭하는 경우 (등록)  
    [스토리관리-스토리뷰어 등록-12](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/c99d2cd8-6a04-4fee-b93c-a2fc82720e14)
    2. 왼쪽 메뉴에서 수정클릭하는 경우 (수정)
    [스토리관리-스토리뷰어 등록-08](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/7169f5d7-2942-4a17-b26f-78ac3bdc9631/)
    
    __audioPopUpContainer.js__
    
    ```
      export default class AudioPopUpContianer extends PIXI.UI.Container {
      constructor () {
          
        * * *

        //등록시 사용하는 컨테이너
        let make = new CheckBoxContainer()
        this.card = make //팝업속 card내용을 등록 컨테이너로 정함
        this.card.verticalAlign = "middle"
        this.card.horizontalAlign = "center"
        let edit = new RadioBoxContainer() // 수정 컨테이너는 생성만 해놓은다.

    ```
  
  7. 음성 선택시

    _음성리스트 전역변수에 추가함_

     __audioPopUpContainer.js__

    ```
      con.enrollBtn.onClick(() => {
      let now = document.getElementById("page_input").textContent - 1
      Data.audioArr[now].push(...this.selectedList)
      this.selectedList = []
      con.parent.container.emit("close")
      })
    ```

    _왼쪽 메뉴바에 추가_

    [스토리관리-스토리뷰어 등록-15](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/3d4ac450-81e7-4b7a-a3cf-b10a51e9671d)

    __LeftmenuAdmin.js__

    ```
      // 음성 밑에 들어가는 콘테이너
      makeAudioContainer () {

      * * *
      //리스트 갯수만큼 생성
         for (let i = 0; i < list.length; i++) {
    ```

    _하이라이트 생성_
    [스토리관리-스토리뷰어 등록-16](https://xd.adobe.com/view/5d045cc7-66d8-4d86-add1-243cf47b35c8-0857/screen/f3b616d4-6fee-4321-b111-9648f03fa201)

    음성리스트중 한 아이템 클릭시 하이라이트 생성
     __LeftmenuAdmin.js__

    ```
      makeAudioContainer () {

        * * *
        base.sprite.on("click", () => {
          //다른 아이템이 하이라이트 그리려고 기다리는 중이면 return
          if (_baseSelect) return
          border.tint = Enum.color.red
          if (list[i].hl === undefined) {
            _baseSelect = true
            if (base.dragable) return
            highlightMaker(this, border, list[i], base)
            base.dragable = true
            return
        }
    ```
    
    ```
      /* 
      하이라이트 객체 만드는 함수
      */
      export function highlightMaker (container, mather, item, base) {}
    ```

 


<br>

## 사용자페이지
  pdf 뷰어는 관리자와 동일한 코드 사용하기 때문에 메뉴판 기준으로 파일명을 정리하겠습니다.

 [Z01-피치서가-스토리북01-시작화면](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/5e9f6464-7b79-4d17-8ffc-e23bf74abeae/)
  __WebMenu.js__
  모든 메뉴 아이콘 생성하는곳



 [Z01-피치서가-스토리북03-그림단어](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/f3e3bd55-ca18-4194-88dd-ef3bccab3679/)
  __WebCardCon.js__
  그림단어 관련 메뉴



 [Z01-피치서가-스토리북06](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/7207d06c-86ed-419e-b5f5-f81e4990c96f/)
  __WebAudioCon.js__
  음성 관련 메뉴



 [Z01-피치서가-스토리북10](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/862a2bf4-0faf-49f5-928a-b1e1da3e5c57/)
  __WebPaintCon.js__
  판서 관련 메뉴


 [Z01-피치서가-스토리북12 – 1](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/f3dfef09-c6f3-4e25-abe6-eb8c7aa43794/)
  __WebBookmarkCon.js__
  북마크 관련메뉴


 [Z01-피치서가-스토리북13](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/f76a4004-e3f0-47ca-bee0-4f0b65a47f51/)
  __FullPageConatiner.js__
  전체 페이지보기 관련 메뉴


  
 [Z01-피치서가-스토리북02-전체보기](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/360d71bf-a945-4d41-93d6-f2f99cbe23c6/)
  전체 화면보기
  __WebScene.js__
  ```
   this.webMenu.fullscreenBtn.onClick(() => {
      this.RightBtn.width = this.LeftBtn.width = 152 * ratioX
      this.RightBtn.anchorRight = 0
      this.con.removeChild(this.webMenu)
      this.RightBtn.addBasicBtn()
      viewCan.style.marginLeft = 152 * ratioX + "px"
      this.cardUpdate()
    })
  ```

 
  _프린트하기_
  __WebScene.js__


  ```
      this.webMenu.printBtn.onClick(() => {
      console.log(this.bookmarkArr)
    })
  ```

  
 [Z히든 페이지>목록>상세 페이지>스토리뷰어>뷰어 종료 팝업](https://xd.adobe.com/view/6c8c1bc7-8eed-48d9-8647-b446f15b74fe-39df/screen/d76f08be-72fc-469c-bd39-45cfe13200f9/)
  전체 화면보기
  ```
    let closeLong = new ListenPopUpLong(
      "계속 읽기",
      "스토리 닫기",
      closeFunc,
      () => {
        console.log("계속 읽기")
      },
      "이야기를 종료하시겠어요?",
    )

    this.webMenu.finBtn.onClick(() => {
      this.con.addChild(closeLong)
    })
  ```

