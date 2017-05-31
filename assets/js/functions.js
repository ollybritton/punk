var shift_bool = false;
var last = 0;

var handle_input = function(code) {


  if(!shift_bool) {
    switch(code) {
      case keys.q:
        audios.first.work_it.currentTime = 0;

        audios.first.work_it.play();
        text.innerHTML = "Work It";
        break;

      case keys.w:
        audios.first.make_it.currentTime = 0;

        audios.first.make_it.play();
        text.innerHTML = "Make It";
        break;

      case keys.e:
        audios.first.do_it.currentTime = 0;

        audios.first.do_it.play();
        text.innerHTML = "Do It";
        break;

      case keys.r:
        audios.first.makes_us.currentTime = 0;

        audios.first.makes_us.play();
        text.innerHTML = "Makes Us";
        break;

      case keys.t:
        audios.first.harder.currentTime = 0;

        audios.first.harder.play();
        text.innerHTML = "Harder";
        break;

      case keys.y:
        audios.first.better.currentTime = 0;

        audios.first.better.play();
        text.innerHTML = "Better";
        break;

      case keys.u:
        audios.first.faster.currentTime = 0;

        audios.first.faster.play();
        text.innerHTML = "Faster";
        break;

      case keys.i:
        audios.first.stronger.currentTime = 0;

        audios.first.stronger.play();
        text.innerHTML = "Stronger";
        break;

      case keys.o:
        audios.first.more_than.currentTime = 0;

        audios.first.more_than.play();
        text.innerHTML = "More Than";
        break;

      case keys.p:
        audios.first.hour.currentTime = 0;

        audios.first.hour.play();
        text.innerHTML = "Hour";
        break;

      case keys.a:
        audios.first.our.currentTime = 0;

        audios.first.our.play();
        text.innerHTML = "Our";
        break;

      case keys.s:
        audios.first.never.currentTime = 0;

        audios.first.never.play();
        text.innerHTML = "Never";
        break;

      case keys.d:
        audios.first.ever.currentTime = 0;

        audios.first.ever.play();
        text.innerHTML = "Ever";
        break;

      case keys.f:
        audios.first.after.currentTime = 0;

        audios.first.after.play();
        text.innerHTML = "After";
        break;

      case keys.g:
        audios.first.work_is.currentTime = 0;

        audios.first.work_is.play();
        text.innerHTML = "Work Is";
        break;

      case keys.h:
        audios.first.over.currentTime = 0;

        audios.first.over.play();
        text.innerHTML = "Over";
        break;

      case keys.z:
        audios.drums.boom.currentTime = 0;
        audios.drums.boom.play();
        break;

      case keys.x:
        audios.drums.clap.currentTime = 0;
        audios.drums.clap.play();
        break;

      case keys.c:
        audios.drums.hihat.currentTime = 0;
        audios.drums.hihat.play();
        break;

      case keys.v:
        audios.drums.kick.currentTime = 0;
        audios.drums.kick.play();
        break;

      case keys.b:
        audios.drums.openhat.currentTime = 0;
        audios.drums.openhat.play();
        break;

      case keys.n:
        audios.drums.ride.currentTime = 0;
        audios.drums.ride.play();
        break;

      case keys.m:
        audios.drums.snare.currentTime = 0;
        audios.drums.snare.play();
        break;

      case keys[","]:
        audios.drums.tink.currentTime = 0;
        audios.drums.tink.play();
        break;

      case keys["."]:
        audios.drums.tom.currentTime = 0;
        audios.drums.tom.play();
        break;
    }
  } else {
    switch(code) {
      case keys.q:
        audios.second.work_it.currentTime = 0;

        audios.second.work_it.play();
        text.innerHTML = "Work It";
        break;

      case keys.w:
        audios.second.make_it.currentTime = 0;

        audios.second.make_it.play();
        text.innerHTML = "Make It";
        break;

      case keys.e:
        audios.second.do_it.currentTime = 0;

        audios.second.do_it.play();
        text.innerHTML = "Do It";
        break;

      case keys.r:
        audios.second.makes_us.currentTime = 0;

        audios.second.makes_us.play();
        text.innerHTML = "Makes Us";
        break;

      case keys.t:
        audios.second.harder.currentTime = 0;

        audios.second.harder.play();
        text.innerHTML = "Harder";
        break;

      case keys.y:
        audios.second.better.currentTime = 0;

        audios.second.better.play();
        text.innerHTML = "Better";
        break;

      case keys.u:
        audios.second.faster.currentTime = 0;

        audios.second.faster.play();
        text.innerHTML = "Faster";
        break;

      case keys.i:
        audios.second.stronger.currentTime = 0;

        audios.second.stronger.play();
        text.innerHTML = "Stronger";
        break;

      case keys.o:
        audios.second.more_than.currentTime = 0;

        audios.second.more_than.play();
        text.innerHTML = "More Than";
        break;

      case keys.p:
        audios.second.hour.currentTime = 0;

        audios.second.hour.play();
        text.innerHTML = "Hour";
        break;

      case keys.a:
        audios.second.our.currentTime = 0;

        audios.second.our.play();
        text.innerHTML = "Our";
        break;

      case keys.s:
        audios.second.never.currentTime = 0;

        audios.second.never.play();
        text.innerHTML = "Never";
        break;

      case keys.d:
        audios.second.ever.currentTime = 0;

        audios.second.ever.play();
        text.innerHTML = "Ever";
        break;

      case keys.f:
        audios.second.after.currentTime = 0;

        audios.second.after.play();
        text.innerHTML = "After";
        break;

      case keys.g:
        audios.second.work_is.currentTime = 0;

        audios.second.work_is.play();
        text.innerHTML = "Work Is";
        break;

      case keys.h:
        audios.second.over.currentTime = 0;

        audios.second.over.play();
        text.innerHTML = "Over";
        break;

      case keys.z:
        audios.drums.boom.currentTime = 0;
        audios.drums.boom.play();
        break;

      case keys.x:
        audios.drums.clap.currentTime = 0;
        audios.drums.clap.play();
        break;

      case keys.c:
        audios.drums.hihat.currentTime = 0;
        audios.drums.hihat.play();
        break;

      case keys.v:
        audios.drums.kick.currentTime = 0;
        audios.drums.kick.play();
        break;

      case keys.b:
        audios.drums.openhat.currentTime = 0;
        audios.drums.openhat.play();
        break;

      case keys.n:
        audios.drums.ride.currentTime = 0;
        audios.drums.ride.play();
        break;

      case keys.m:
        audios.drums.snare.currentTime = 0;
        audios.drums.snare.play();
        break;

      case keys[","]:
        audios.drums.tink.currentTime = 0;
        audios.drums.tink.play();
        break;

      case keys["."]:
        audios.drums.tom.currentTime = 0;
        audios.drums.tom.play();
        break;
    }
  }


};

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    console.log(charCode)

    if(charCode == keys["="]) {
      shift_bool = true;
    } else if (charCode == last) {
      return;
    }

    random_num = randomInt(0,colors.length - 1 );

    main.style.backgroundColor = colors[random_num];
    tutorial.style.backgroundColor = colors[random_num];

    handle_input(charCode);
    last = charCode;
};

document.onkeyup = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;

    if(charCode == keys["="]) {
      shift_bool = false;
    }

    last = 0;
};
