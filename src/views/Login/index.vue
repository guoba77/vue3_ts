<template>
  <div class="login">
    <!-- <el-row></el-row> -->
    <el-form class="form" :rules="rules" :model="form" ref="ruleFormRef">
      <h1>登录</h1>
      <h2>欢迎来到锅巴甄选</h2>
      <el-form-item prop="username">
        <el-input
          :prefix-icon="User"
          v-model="form.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          @keyup.enter="submit(ruleFormRef)"
          :prefix-icon="Lock"
          v-model="form.password"
          placeholder="请输入用户密码"
          show-password
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button
          :loading="showBtnload"
          @click="submit(ruleFormRef)"
          type="primary"
          style="width: 100%"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
import { useUserStore } from './../../store/user'
import { getTime } from '@/utils/getTime'
export default defineComponent({
  setup() {
    const checkPassword = (rule: any, value: any, callback: any) => {
      if (!value) {
        return callback(new Error('请输入用户密码'))
      }
      setTimeout(() => {
        if (!Number.isInteger(Number(value))) {
          callback(new Error('请输入数字'))
        } else {
          if (value.length > 10) {
            callback(new Error('密码不能超过10位'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    const useStore = useUserStore()
    const showBtnload = ref(false)
    const router = useRouter()
    interface formr {
      username: string
      password: string
    }
    const form = reactive<formr>({
      username: '',
      password: '',
    })
    const ruleFormRef = ref<FormInstance>()
    const rules = reactive<FormRules<formr>>({
      username: [
        {
          required: true,
          message: '请输入用户名！',
          trigger: 'blur',
        },
        { min: 3, max: 5, message: '请输入3-5位用户名！', trigger: 'blur' },
      ],
      password: [{ validator: checkPassword, trigger: 'blur' }],
    })

    const submit = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate(async (valid, fields) => {
        if (valid) {
          showBtnload.value = true
          try {
            await useStore.changeCount(form)
            ElNotification({
              title: `${getTime()}`,
              message: '欢迎回来',
              type: 'success',
            })
            showBtnload.value = false
            router.push({
              path: '/home',
            })
          } catch (error) {
            console.log(error)
            ElNotification({
              type: 'error',
              message: (error as Error).message,
            })
            showBtnload.value = false
          }
        } else {
          console.log('error submit!', fields)
        }
      })
    }
    // 获取用户信息
    // async function getUserInfoList() {
    //   const res = await getUserInfo()
    //   console.log('用户信息', res)
    // }
    return {
      form,
      ruleFormRef,
      rules,
      submit,
      User,
      Lock,
      showBtnload,
      useStore,
    }
  },
})
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg');
  background-size: cover;
  .form {
    box-shadow: 0 10px 6px -6px rgba(19, 19, 19, 0.1),
      12px 0 8px -8px rgba(19, 19, 19, 0.1);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    min-height: 30%;
    text-align: center;
    width: 25%;
    background: url('@/assets/images/login_form.png');
    position: absolute;
    top: 30%;
    right: 5%;
    h1 {
      color: white;
    }
    h2 {
      font-weight: normal;
      margin: 30px 0;
    }
    .btn {
      margin-top: 20px;
      .el-button {
        height: 40px;
        // background: #000;
      }
    }
  }
}
</style>
