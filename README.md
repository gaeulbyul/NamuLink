## NamuLink

[![jsDelivr Stats](https://data.jsdelivr.com/v1/package/gh/List-KR/NamuLink/badge)](https://www.jsdelivr.com/package/gh/List-KR/NamuLink)

NamuLink는 나무위키에 있는 파워링크 광고를 차단합니다.

### 빠른 시작
이 유저스크립트를 감지시키기 위해 아래 URL를 클릭하세요.

https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js

### 설치하는 방법
- [Violentmonkey](https://addons.mozilla.org/ko/firefox/addon/violentmonkey/) (AdGuard 프리미엄에 접근하실 수 없으시면 권장됩니다) - 브라우저 확장
    <details>
    <summary>Mozilla Firefox에서 설치하는 방법 (동영상)</summary>

    [firefox.webm](https://user-images.githubusercontent.com/98787049/205464257-9113ca81-7f9e-4e85-b4d3-03d225d25e37.webm)

    </details>
    <details>
    <summary>Google Chrome에서 설치하는 방법 (동영상)</summary>

    [googlechrome.webm](https://user-images.githubusercontent.com/98787049/205464253-322b5e07-a74e-4c98-b7b4-077ec21be5c2.webm)

    </details>

    1. `대시보드`를 여세요.
    2. `새로운 유저스크립트` 버튼을 클릭하세요.
    3. `URL에서 설치` 버튼을 클릭하세요.
    4. 아래 URL를 입력하세요:
    ```
    https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js
    ```
    5. `확인` 버튼을 클릭하세요.
    6. 유저스크립트의 메타데이터를 확인하시고 `설치 확인`를 클릭하세요.
    7. 나무위키가 열려진 탭으로 돌아가신 뒤 F5나 Ctrl + R를 누르거나 새로 고침 버튼을 눌러서 새로 고침하세요.

- [Tampermonkey](https://addons.mozilla.org/ko/firefox/addon/tampermonkey/) - 브라우저 확장
    1. Tampermonkey의 설정을 여세요.
    2. `도구` 탭으로 이동하세요.
    3. `Install from URL`로 아래 URL를 입력하세요:
        ```
        https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js
        ```
    4. `설치` 버튼을 클릭하세요.
    5. 유저스크립트의 메타데이터를 확인하시고 `설치`를 클릭하세요.
    6. 나무위키가 열려진 탭으로 돌아가신 뒤 F5나 Ctrl + R를 누르거나 새로 고침 버튼을 눌러서 새로 고침하세요.

    <details>
    <summary>호환성 표</summary>

    브라우저 확장 | 라이선스 | 상태
    ----------------- | ------ | -------
    [Tampermonkey](https://www.tampermonkey.net/) | 사유 (도네이션웨어) | ✔
    [Greasemonkey](https://www.greasespot.net/) | MIT | ✘
    [Violentmonkey](https://violentmonkey.github.io/) | MIT | ✔

    </details>
    
- Windows용 AdGuard
    <details>
    <summary>설치하는 방법 (동영상)</summary>

    [adguardforwindows.webm](https://user-images.githubusercontent.com/98787049/205464627-17dc520f-2b47-44ad-9c7b-75b15202c40c.webm)

    </details>

    1. `설정`을 클릭하세요.
    2. `확장 프로그램`을 클릭하세요.
    3. `확장 프로그램 추가`를 클릭하세요.
    4. 아래 URL를 입력하세요:
        ```
        https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js
        ```
    5. `설치`를 클릭하세요.
    6. 유저스크립트의 메타데이터를 확인하시고 `설치`를 클릭하세요.
    7. 나무위키가 열려진 탭으로 돌아가신 뒤 F5나 Ctrl + R를 누르거나 새로 고침 버튼을 눌러서 새로 고침하세요.


- Android용 AdGuard
    1. 설정 -> 확장 프로그램으로 이동하세요.
    2. `새 확장 프로그램`을 터치하세요.
    3. 아래 URL를 입력하세요:
        ```
        https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js
        ```
    4. `다음`을 터치하세요.
    5. 유저스크립트의 메타데이터를 확인하시고 `추가`를 클릭하세요.
    6. 나무위키가 열려진 탭으로 돌아가신 뒤 새로 고침 버튼을 터치해서 새로 고침하세요.


 - AdGuard for iOS

    유저스크립트는 현재 iOS용 AdGuard에서 지원되지 않습니다.
    그러나, 미래에 지원될 겁니다.[^1]
    
    몰론, 일시적으로 quoid의 userscripts [^2][^3]을 사용하실 수 있습니다.

 - quoid의 userscripts (iOS) [^2][^3]
    1. Apple App Store에서 quoid의 Userscript 앱을 설치해주세요.
    2. 앱을 실행하여 유저스크립트가 저장될 디텍터리를 설정해주세요.
    3. iOS 설정 -> Safari -> 확장 프로그램 -> Userscripts를 켜주세요.
    4. iOS 설정 -> Safari -> 확장 프로그램 -> Userscripts -> 모든 웹 사이트에 대해 허용으로 바꿔주세요.
    5. 아래 URL를 Safari로 열어주세요.
            ```
        https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js
        ```
    6. Safari의 주소 막대에서 확장 프로그램 아이콘을 누르고 Userscripts 앱을 엽니다.
    7.  `Tab to install`을 클릭 후 완료 버튼을 누러주세요.
    8. 나무위키가 열려진 탭으로 돌아가신 뒤 새로 고침 버튼을 터치해서 새로 고침해주세요.


[^1]: https://github.com/AdguardTeam/AdguardForiOS/issues/1542
[^2]: https://github.com/quoid/userscripts
[^3]: https://apps.apple.com/kr/app/userscripts/id1463298887


### List-KR가 NamuLink를 만든 이유?
List-KR Script의 라이선스와 달리, NamuLink는 다른 소프트웨어가 같은 라이선스 사용 없이 이 유저스크립트를 사용할 수 있도록 허용하는 MIT 라이선스하에 라이선스됩니다.