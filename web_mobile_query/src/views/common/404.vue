<template>
  <div class="error">
    <div class="notfound">
      <img src="https://cdn.m.tencent.com/caagw/images/noauth.png" />
      <p>
        抱歉，当前暂不支持该渠道访问，请使用PC端进行访问。(Please Sign in the
        website via PC.)
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; // 主轴默认就是横轴
  width: 100%;
  height: 100%;
  .notfound {
    width: 294px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
    }
    p {
      color: #919191;
      margin: 16px 0;
      padding: 0 40px;
      font-size: 14px;
    }
  }
}
</style>
