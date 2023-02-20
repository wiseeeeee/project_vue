<template>
   <div class="login_wrap">
      <form>
        <div class="form-group login_input_group">
            <input type="text" id="id" class="login_input_title" placeholder="아이디" v-model="loginRequest.loginId" title="아이디" > 
        </div>
        <div class="form-group login_input_group">
            <input type="password" id="password" class="login_input_title" placeholder="비밀번호" v-model="loginRequest.password" title="비밀번호"> 
        </div>
        <div class="login_box">
            <button type="button" class="btn btn_white" @click="onClick">로그인</button>
        </div>
          <div class="login_utile">
            <div class="check_area">
                <input type="checkbox" id="id_save" class="id_save_chk"  v-model="loginRequest.saveId" title="inputTitle"> 
                <label for="id_save" class="id_save">아이디 저장</label>
            </div>
            <div class="find_area">
                  <a href="#">비밀번호 찾기</a>
            </div>
        </div>
      </form>
    </div>
  
</template>

<script>
  export default {
    data() {
      return {
        loginRequest: {
          loginId: '',
          password: '',
          saveId: false
        }
      }
    }
  }
</script>
