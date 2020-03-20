export default function (context) {
  console.log('[Middleware] Just from  Auth')

  if(!context.store.getters.isAuthenticated) {
    console.log('[Middleware] not authentıcated')

    context.redirect('/login')
  }

}
