// Project-specific V4 detail display config.
const PROJECT_VISUALS = {
  "campus": {
    "icon": "building",
    "metricIcons": [
      "wallet",
      "calendar",
      "receipt"
    ],
    "beforeTitle": "노후 공장의 용도 전환과 초기 견적 초과",
    "beforeText": "원도면이 없는 노후공장을 복합캠퍼스로 전환해야 했습니다. 초기 일괄 견적은 예산을 초과했고, 연구·제조 장비의 공간·설비 요구와 인허가를 9월 일정에 맞춰 조율해야 했습니다. 신규 시공 부분의 원상복구 의무도 잠재비용이었습니다.",
    "beforeBullets": [
      "기존 현황·전력·공조 조건 확인 필요",
      "일괄 발주 견적과 공종별 일정 간섭"
    ],
    "afterTitle": "분리발주·설비 인수·공정 조율로 비용과 일정 관리",
    "afterText": "실측과 부서별 요구를 설계 기준으로 정리하고, 8개 공종 분리발주·기존 전력설비 인수로 실제 구축비를 낮췄습니다. 공정표 기반 조율로 가동을 2개월 앞당겼으며 원상복구 면제 특약까지 반영했습니다.",
    "afterBullets": [
      "실제 구축비 약 7,100만 원 절감·가동 2개월 단축",
      "원상복구 추정비 약 3~4억 원 잠재 부담 회피"
    ],
    "actionTitles": [
      "실측·장비 요구사항을 설계 기준으로 구체화",
      "8개 공종 분리발주로 턴키 견적 재검토",
      "전력설비 재사용 검토와 인수 협상",
      "공정표·인허가 대응으로 가동 일정 단축",
      "시설 존치 가치에 근거한 원상복구 특약 협상"
    ],
    "actionIcons": [
      "ruler",
      "layers",
      "wallet",
      "calendar",
      "filecheck"
    ],
    "graphicAfter": {
      "1": "campus-cost",
      "2": "campus-power",
      "3": "campus-schedule",
      "4": "campus-restore"
    },
    "resultIcons": [
      "wallet",
      "calendar",
      "filecheck"
    ]
  },
  "standards": {
    "icon": "building",
    "metricIcons": [
      "building",
      "book",
      "shield"
    ],
    "beforeTitle": "사업장마다 달랐던 기준과 본사 집중 업무",
    "beforeText": "사업장별 점검·보고 경로가 달라 본사 담당자에게 업무가 집중됐습니다. 자산의 책임자·사용 계획·처분 기준도 부족했고, 출입권한 53개가 부서별로 분산되어 사용자 식별과 권한 회수에 시간이 걸렸습니다.",
    "beforeBullets": [
      "현지 점검 책임과 본사 보수 판단 경계 불명확",
      "유휴자산·출입권한의 담당·이력 관리 문제"
    ],
    "afterTitle": "현장 담당과 본사의 책임을 나눈 표준 운영",
    "afterText": "현지 부담당자와 본사의 업무를 구분하고 공종별 점검표와 운영 기준을 마련했습니다. 자산 실사·처분 대상을 분류하고 보안등급을 기본 4개·기능별 11개 추가 권한으로 재편해 관리 체계를 구체화했습니다.",
    "afterBullets": [
      "8개 사업장 업무분장·운영 기준 정비",
      "자산 334건 실사 및 출입권한 관리 개선"
    ],
    "actionTitles": [
      "사업장 부담당자 지정과 공종별 R&R 구분",
      "운영규정 4건 제정",
      "신규 사업장 구축 절차 표준화",
      "자산 334건 실사·보관·재사용·처분 검토",
      "출입권한 재편과 사용자 식별 개선"
    ],
    "actionIcons": [
      "users",
      "book",
      "route",
      "package",
      "shield"
    ],
    "graphicAfter": {
      "0": "standards-roles",
      "1": "standards-regulations",
      "3": "standards-assets",
      "4": "standards-access"
    },
    "resultIcons": [
      "book",
      "package",
      "shield"
    ]
  },
  "yulchon": {
    "icon": "building",
    "metricIcons": [
      "clock",
      "chart",
      "list"
    ],
    "beforeTitle": "유지보수 위치 확인과 자재 대기로 처리 지연",
    "beforeText": "약 700개 집무실에서 위치와 자재 규격을 확인하는 데 시간이 걸렸습니다. 요청별 긴급도 기준이 없고, 수입 자재의 납기와 협력사의 사전 방문이 맞물리면서 보수 처리 일정이 지연됐습니다.",
    "beforeBullets": [
      "위치·규격 확인을 위한 반복 현장 방문",
      "요청 긴급도와 업무 영향도 분류 기준 부족"
    ],
    "afterTitle": "P1~P4 분류와 보수 정보 사전 공유",
    "afterText": "요청 위치와 보수 이력은 도면에 표시하고, 집무실별 시방 정보는 별도 문서로 정리했습니다. 업무 영향도에 따른 P1~P4 기준과 수입 자재 선확보, 사진·영상 사전 공유로 확인 방문과 일정 대기를 줄였습니다.",
    "afterBullets": [
      "요청 우선순위 P1~P4 적용",
      "평균 처리기간 4일 → 2.5일"
    ],
    "actionTitles": [
      "12개 층 유지보수 맵으로 요청·이력 시각화",
      "약 700개 집무실의 보수·자재 기준 정리",
      "P1~P4 분류와 건물 관리주체 협의",
      "수입 자재 선확보·문 보수 사전 진단",
      "총무팀·비서진에 반복 요청 대응 절차 공유"
    ],
    "actionIcons": [
      "map",
      "filecheck",
      "list",
      "package",
      "users"
    ],
    "graphicAfter": {
      "2": "yulchon-priority",
      "3": "yulchon-door",
      "4": "yulchon-time"
    },
    "resultIcons": [
      "clock",
      "filecheck",
      "list"
    ]
  },
  "vendors": {
    "icon": "handshake",
    "metricIcons": [
      "users",
      "chart",
      "building"
    ],
    "beforeTitle": "유사 서비스가 여러 협력사에 분산 계약",
    "beforeText": "세종·청주 사업장마다 미화·F&B·비품 공급계약을 따로 운영했습니다. 서비스 범위가 유사해도 단가와 납품 조건을 한 기준으로 비교하기 어렵고, 사업장별 요청과 계약 관리가 분산되는 문제가 있었습니다.",
    "beforeBullets": [
      "사업장별 중복 계약과 분산 발주",
      "공급 단가·서비스 범위 비교의 어려움"
    ],
    "afterTitle": "계약 범위를 재편하고 권역별 구매 규모 통합",
    "afterText": "사업장별 계약·지출·이행 현황을 대조해 통합 가능한 업무를 선별했습니다. 구매 물량을 묶어 공급 조건을 협상하고, 서비스 범위를 조정하되 재편 이후의 이행 품질도 확인했습니다.",
    "afterBullets": [
      "대상 협력사 7개 → 3개로 재편",
      "관련 운영비 약 14% 절감"
    ],
    "actionTitles": [
      "4개 사업장 계약·지출·서비스 범위 비교",
      "권역별 비품 구매물량 통합과 공급단가 협상",
      "미화·F&B·비품 계약 재편 및 조건 협상",
      "재편 이후 SLA·지적사항·서비스 품질 점검"
    ],
    "actionIcons": [
      "filecheck",
      "package",
      "handshake",
      "check"
    ],
    "graphicAfter": {
      "1": "vendors-scope",
      "2": "vendors-change"
    },
    "resultIcons": [
      "users",
      "chart",
      "check"
    ]
  },
  "defects": {
    "icon": "wrench",
    "metricIcons": [
      "list",
      "chart",
      "clock"
    ],
    "beforeTitle": "누적된 미처리 하자와 반복 방문",
    "beforeText": "준공시설 4개소에서 하자 접수가 누적된 가운데 접수순 대응과 협력사의 개별 방문이 반복됐습니다. 입주민 일정과 업체 투입일이 맞지 않거나 같은 공종을 여러 번 방문해 보수가 늦어졌습니다.",
    "beforeBullets": [
      "공종·긴급도별 우선순위 조정 필요",
      "방문일·인력·자재 일정의 중복"
    ],
    "afterTitle": "시스템 데이터와 공종별 묶음 보수로 개선",
    "afterText": "시설별 미처리·지연 건을 분석해 보수 우선순위를 정하고, 하자접수 인력과 직영반장, 협력사 일정을 조정했습니다. 반복 공종은 자재와 인력을 미리 준비해 같은 방문일에 처리하도록 관리했습니다.",
    "afterBullets": [
      "미처리 건수 2,230 → 386건",
      "평균 처리기간 5일 → 3일"
    ],
    "actionTitles": [
      "지연·공종 데이터를 분석해 긴급보수 우선 배정",
      "자재·인력을 미리 배치하고 동일 공종 묶음 보수",
      "창호 부품 반복 누락의 동일 라인 일괄 보완",
      "통창 스크래치 공동 재현과 30세대 보수 합의"
    ],
    "actionIcons": [
      "chart",
      "users",
      "package",
      "wrench"
    ],
    "graphicAfter": {
      "0": "defects-count",
      "1": "defects-time",
      "3": "defects-glass"
    },
    "resultIcons": [
      "chart",
      "clock",
      "filecheck"
    ]
  },
  "cost": {
    "icon": "filecheck",
    "metricIcons": [
      "wallet",
      "chart",
      "users"
    ],
    "beforeTitle": "‘1식’ 내역과 안전관리비 구매 증빙의 불투명성",
    "beforeText": "작업별 물량·단가가 ‘1식’에 묶여 미시공·근거 부족 항목을 확인하기 어려웠습니다. 안전관리비에서는 과거 사진 재사용 및 실제 영업하지 않는 구매처 기재 사례가 확인되어 청구 증빙을 검증할 필요가 있었습니다.",
    "beforeBullets": [
      "1식 견적에 포함된 미시공·무근거 항목",
      "안전관리비 구매처·거래·현장 사용 근거 검증"
    ],
    "afterTitle": "구매처 실재 확인·물량 대조 후 기성 재산정",
    "afterText": "구매처 주소·사진대지를 지도·현장 확인과 대조하고, 거래·사용 근거가 불분명한 비용을 제외했습니다. 1식 공사를 세부 물량·단가로 분해해 표준 일위대가 및 실제 시공 내용과 비교하고 협력사 평가에도 반영했습니다.",
    "afterBullets": [
      "과거 사진 재사용·공실 구매처 청구 발견",
      "근거 없는 기성 제외 및 공사비 약 13% 절감"
    ],
    "actionTitles": [
      "안전관리비 구매처·사진·실사용 증빙 검증",
      "‘1식’ 공사 항목을 작업·물량·단가로 세분화",
      "표준 일위대가·계약·전년도 집행내역 대조",
      "부적정 기성 조정과 협력사 SLA 평가 연계"
    ],
    "actionIcons": [
      "receipt",
      "filecheck",
      "chart",
      "check"
    ],
    "graphicAfter": {
      "0": "cost-proof",
      "1": "cost-check",
      "2": "cost-percent"
    },
    "resultIcons": [
      "filecheck",
      "chart",
      "users"
    ]
  },
  "cotis": {
    "icon": "list",
    "metricIcons": [
      "check",
      "list",
      "chart"
    ],
    "beforeTitle": "표현이 다른 동일 민원과 기록 누락",
    "beforeText": "서면 접수와 서로 다른 시설 명칭 사용으로 같은 하자가 여러 유형으로 분류됐습니다. 접수·보수 이력이 일관되지 않아 중복 요청이 발생했고, 책임 범위 이견이나 협력사 투입 지연으로 장기 미처리 건도 남았습니다.",
    "beforeBullets": [
      "서면 요청·시스템 접수 간 이력 불일치",
      "동일 하자의 중복 분류 및 장기 지연"
    ],
    "afterTitle": "COTIS 분류·이력 정비와 완료 검증 강화",
    "afterText": "표현이 다른 동일 하자를 공통 유형으로 묶고, 사진과 보수 기록을 대조해 접수 이력을 보완했습니다. 처리율·지연 건을 확인해 보수 일정을 조정하고 완료 사진을 검증해 최종 승인했습니다.",
    "afterBullets": [
      "중복 접수 약 30% 감소",
      "15일 이내 최종 조치율 87%"
    ],
    "actionTitles": [
      "유사한 민원 표현을 COTIS 표준 유형으로 통일",
      "하자접수 앱 사진으로 서면 기록·미등록 하자 보완",
      "처리율·지연비율 등 KPI 기반 장기 미처리 관리",
      "완료 증빙 최종 승인·재보수·입주민 대면 협의"
    ],
    "actionIcons": [
      "list",
      "map",
      "chart",
      "check"
    ],
    "graphicAfter": {
      "0": "cotis-categories",
      "1": "cotis-flow",
      "2": "cotis-rate"
    },
    "resultIcons": [
      "chart",
      "check",
      "users"
    ]
  },
  "meal": {
  "icon": "users",
  "metricIcons": [
    "users",
    "chart",
    "check"
  ],
  "beforeTitle": "점심마다 차량 이동이 필요했던 외곽 사업장",
  "beforeText": "사업장 주변 식당이 부족해 구성원들이 점심시간마다 차로 이동해야 했습니다. 이동과 대기가 반복되는 불편이 있었지만 별도 구내식당 신설은 공간·시설 투자 부담이 컸습니다.",
  "beforeBullets": [
    "식사 접근성이 낮고 이동·대기 시간 발생",
    "별도 식당 신설 시 추가 공간·시설 부담"
  ],
  "afterTitle": "기존 공간에 이동급식을 도입하고 의견으로 개선",
  "afterText": "사용하지 않던 공간과 탕비시설·테이블을 활용해 급식을 받을 수 있도록 했습니다. 업체 3곳을 방문·시식하며 선정하고, 초기 만족도와 자유 의견을 바탕으로 메뉴 구성과 식대·운영 조건을 조정했습니다.",
  "afterBullets": [
    "3개 급식업체 직접 비교·선정, 초기 시식 만족도 78%",
    "메뉴·식대 조건 개선 후 정기 식사 지원 운영"
  ],
  "actionTitles": [
    "구성원의 점심시간 불편 확인과 대안 검토",
    "유휴공간·기존 시설을 활용한 급식 운영안 마련",
    "급식업체 3곳 직접 방문·시식·비교",
    "초기 만족도와 구체적인 메뉴 의견 반영",
    "정기 식사 지원으로 운영 체계 정착"
  ],
  "actionIcons": [
    "map",
    "building",
    "handshake",
    "list",
    "check"
  ],
  "graphicAfter": {
    "1": "meal-space",
    "2": "meal-compare",
    "3": "meal-feedback"
  },
  "resultIcons": [
    "building",
    "chart",
    "check"
  ]
}
};
