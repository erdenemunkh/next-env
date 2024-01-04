export async function GET() {
  return Response.json({
    '[Node.js only] ENV_VARIABLE:': process.env.ENV_VARIABLE,
    '[Node.js only] ENV_LOCAL_VARIABLE:': process.env.ENV_LOCAL_VARIABLE,
    '[Node.js only] ENV_DEV_VARIABLE:': process.env.DEVELOPMENT_ENV_VARIABLE,
    '[Node.js only] ENV_PROD_VARIABLE:': process.env.PRODUCTION_ENV_VARIABLE,
  })
}