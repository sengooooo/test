$('#question').hide();
$('#result').hide();

var num = 1;

var q = {
  1: {
    title: '사람이 많은 길에서 친구를 발견했다. 나의 반응은?',
    type: 'EI',
    A: '여기서 뭐해! 달려가서 바로 아는척을 한다',
    B: '날 못봤겠지.. 그냥 지나친다',
  },

  2: {
    title: '돼지는 삐약삐약! 시험에 나오니까 외우세요! 나의 반응은?',
    type: 'SN',
    A: '돼지는 삐약삐약.. 시험에 나오니까 외우자!',
    B: '돼지가 도대체 왜 삐약삐약이죠..? 돼지는 꿀꿀인데..',
  },

  3: {
    title: '걔가 너 싫어한대! 라는 말을 들었다.', //질문
    type: 'FT',
    A: '내가 뭘 잘못했나?',
    B: '나를 왜 싫어하지?',
  },

  4: {
    title: '방 정리 해야하는데.. 너무 피곤하다..',
    type: 'JP',
    A: '일단 쉬고! 내일 정리하자..',
    B: '얼른 정리하고 쉬어야지..',
  },
};

var result = {
  ENFJ: {
    job: '리포터',
    info1: '당신의 직업은 리포터!',
    info2:
      '● 말이 많음<br>● 사람을 이끄는 것에 타고난 기질이 있음<br>● 사람을 좋아함<br>● 많은 사람들의 신뢰를 받음<br>● 비추천직업 : 장의사',
  },
  ENFP: {
    job: '방송PD',
    info1: '당신의 직업은 방송PD!',
    info2:
      '● 얘기하는 거 좋아함<br>● 하고 싶은 건 꼭 해야함<br>● 생각이 많음<br>● 남 얘기에 리액션을 잘 해줌<br>● 비추천직업 : 회계사',
  },

  ENTJ: {
    job: '변호사',
    info1: '당신의 직업은 변호사!',
    info2:
      '● 누구한테 의존하지 않음<br>● 자기애가 강하며 불도저 같은 성격<br>● 문제의 해결책을 찾아가는 타입<br>● 현실적이고 논리적임<br>● 비추천직업 : 마사지사',
  },

  ENTP: {
    job: '정치인',
    info1: '당신의 직업은 정치인!',
    info2:
      '● 논쟁하는 것을 좋아함<br>● 탐욕적이고, 고집이 셈<br>● 직설적이고 솔직하게 표현함<br>● 좋아하는 사람과 싫어하는 사람이 명확함<br>● 비추천직업 : 음식점 사장',
  },
  ESFJ: {
    job: '유치원 교사',
    info1: '당신의 직업은 유치원 교사!',
    info2:
      '● 본인 주변 인물을 다 챙김<br>● 고민 들어주는 거 좋아함<br>● 계획 틀어지는 거 싫어함<br>● 새로운 사람 만나는 걸 좋아함<br>● 비추천직업 : 등대지기',
  },
  ESFP: {
    job: '코미디언',
    info1: '당신의 직업은 코미디언!',
    info2:
      '● 사교성이 좋음<br>● 자존감이 높음<br>● 걱정을 많이 하지 않음<br>● 혼자 있으면 지루함<br>● 비추천직업 : 수도승',
  },
  ESTJ: {
    job: '은행장',
    info1: '당신의 직업은 은행장!',
    info2:
      '● 현실적, 이성적, 직설적임<br>● 외로움을 잘 타지 않음<br>● 리더 역할을 주도적으로 함<br>● 계획이 틀어지는 걸 싫어함<br>● 비추천직업 : 플로리스트',
  },

  ESTP: {
    job: '파일럿',
    info1: '당신의 직업은 파일럿!',
    info2:
      '● 모험심이 강함<br>● 새로운 사람들 만나는 걸 좋아함<br>● 스트레스 받지 않음<br>● 남에게 관심 없음<br>● 비추천직업 : 시인',
  },
  INFJ: {
    job: '사회복지사',
    info1: '당신의 직업은 사회복지사!',
    info2:
      '● 선의의 옹호자<br>● 나서는 거 싫어함<br>● 하고 싶은 건 열심히 함<br>● 주변 사람들 잘 챙김<br>● 비추천직업 : 쇼호스트',
  },
  INFP: {
    job: '작곡가',
    info1: '당신의 직업은 작곡가!',
    info2:
      '● 잡생각이 많으며, 망상을 자주 함<br>● 이상주의적임<br>● 낯을 많이 가리며, 인간관계에 예민함<br>● 게으른 완벽주의자<br>● 비추천직업 : 형사',
  },

  INTJ: {
    job: '회계사',
    info1: '당신의 직업은 회계사!',
    info2:
      '●혼자 있는 거 좋아함<br>● 사실과 원리원칙을 중시함<br>● 돈 관리를 잘 함<br>● 세세하게 계획을 짜고 지냄<br>● 비추천직업 : 클럽DJ',
  },

  INTP: {
    job: '천문학자',
    info1: '당신의 직업은 천문학자!',
    info2:
      '● 혼자 있는 게 제일 좋음<br>● 공상을 자주 함<br>● 남에게 피해 주는 거 싫어함<br>● 감정 기복이 적음<br>● 비추천직업 : 유치원 교사',
  },
  ISTJ: {
    job: '형사',
    info1: '당신의 직업은 형사!',
    info2:
      '● 원리원칙적이고 계획적임<br>● 책임감이 강함<br>● 시작한 목표는 꼭 끝내야함<br>● 청렴 결백하며 논리적임<br>● 비추천직업 : 마술사',
  },

  ISTP: {
    job: '사진작가',
    info1: '당신의 직업은 사진작가!',
    info2:
      '● 혼자만의 문화생활을 즐김<br>● 새로운 사람 만나는 거 싫어함<br>● 내가 맡은 바를 다 함<br>● 관찰력이 뛰어나며, 호불호가 강함<br>● 비추천직업 : 콜센터 직원',
  },

  ISFJ: {
    job: '물리치료사',
    info1: '당신의 직업은 물리치료사!',
    info2:
      '● 남들 챙기는 거 좋아함<br>● 게으른 완벽주의자<br>● 배려심 많고 공감 잘해줌<br>● 겸손하고 성격이 온화함<br>● 비추천직업 : 스탠딩 코미디언',
  },
  ISFP: {
    job: '수의사',
    info1: '당신의 직업은 수의사!',
    info2:
      '● 호기심이 많음<br>● 양보를 잘 하고 겸손함<br>● 인간관계에 신경을 많이 씀<br>● 낙천적인 성격<br>● 비추천직업 : 파일럿',
  },
};

function start() {
  $('#start').hide();
  $('#question').show();
  next();
}

$('#replay').click(function () {
  resetTest();
});

function resetTest() {
  num = 1;
  $('#EI').val('0');
  $('#SN').val('0');
  $('#FT').val('0');
  $('#JP').val('0');
  $('#result').hide();
  $('#start').show();
}

function next() {
  if (num == 5) {
    $('#question').hide();
    $('#result').show();
    var str = '';
    $('#EI').val() < 1 ? (str += 'I') : (str += 'E');
    $('#SN').val() < 1 ? (str += 'N') : (str += 'S');
    $('#FT').val() < 1 ? (str += 'T') : (str += 'F');
    $('#JP').val() < 1 ? (str += 'J') : (str += 'P');

    $('#job').html(result[str]['job']);
    $('#info1').html(result[str]['info1']);
    $('#info2').html(result[str]['info2']);
  } else {
    $('.progress-bar').attr('style', 'width: calc(100/4*' + num + '%)');
    $('#pgrNum').html(num + '/4');
    $('#title').html(q[num]['title']);
    $('#type').val(q[num]['type']);
    $('#A').html(q[num]['A']);
    $('#B').html(q[num]['B']);
    num++;
  }
}

$('#A').click(function () {
  var type = $('#type').val();
  var preValue = $('#' + type).val();
  $('#' + type).val(parseInt(preValue) + 1);
  next();
});
$('#B').click(function () {
  next();
});

function copy() {
  var url = '';
  var textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('링크가 복사되었습니다.');
}
