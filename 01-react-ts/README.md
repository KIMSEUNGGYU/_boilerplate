# 번장
- 스크린 샷과 비슷한 상품 검색 페이지 만들기

## 스크린샷
![번장](https://user-images.githubusercontent.com/45627868/181226758-78c011e8-46a2-4857-9952-ea30ffedf967.PNG)


## 상품 검색 API
```
// 신발, date
GET https://api.stg-bunjang.co.kr/api/1/find_v2.json?q=%EC%8B%A0%EB%B0%9C&order=date&version=4
```

q: 검색 키워드
order: 정렬순서 (date, price_asc, price_desc)
version: 4 (고정)

## 자동 완성 API

```
GET https://api.stg-bunjang.co.kr/api/1/search/suggests_keyword.json?q=+%EC%8B%A0&type=product&v=2
```
q: 검색 키워드
type: product (고정)

## v: 2 (고정)
- [x] 과제1 - 텍스트 상자에 입력후 엔터 눌렀을때 검색 API 호출해서 상품 리스트 보여주기
- [x] 과제2 - 최신순, 저가순, 고가순 정렬
- [ ] 과제3 - 검색어 자동완성 구현

---
- 시간 내에 구현하는게 중요한 듯  
  나는 그냥 코드 스타일 보는 줄 알고, commit 도 하고 Container-Presenter 패턴 도 지키면서 코딩했는데 ㅠㅠ 그래서 과제 2 구현 도중에 시간 끝 (5분만 더하면 구현할 수 있었는데 ㅠㅠ)
- 코드 빨리 하는게 중요한듯  
  Container-Presenter 패턴 대신에 hooks 패턴 사용할걸! ㅠㅠ
  