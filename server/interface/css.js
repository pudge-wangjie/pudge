import Router from 'koa-router';

const router = new Router({
  prefix: '/css'
})

router.get('/list', async(ctx) => {
  ctx.body = {
    list: ['beijing', 'tianjin']
  }
})

export default router;