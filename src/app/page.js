import styles from './../styles.module.css'

const Code = ({ children }) => (
  <code className={styles.inlineCode}>{children}</code>
)

const IndexPage = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Environment Variables with Next.js</h1>
      <hr className={styles.hr} />
      <p>
        In general only <Code>.env.local</Code> or <Code>.env</Code> are needed
        for this, but the table also features the usage of{' '}
        <Code>.env.development</Code> and <Code>.env.production</Code>.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Value</th>
            <th>Added By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NEXT_PUBLIC_ENV_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
            <td>
              <Code>.env</Code>
            </td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_ENV_LOCAL_VARIABLE</td>
            <td>{process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}</td>
            <td>
              <Code>.env.local</Code>
            </td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE</td>

            <td>{process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}</td>
            <td>
              <Code>.env.development</Code>
            </td>
          </tr>
          <tr>
            <td>NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE</td>

            <td>{process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE}</td>
            <td>
              <Code>.env.production</Code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Code>.env.local</Code> is not added by the example, because it must be
        ignored by git, but you can add it manually:
      </p>
      <pre>
        <code>cp .env.local.example .env.local</code>
      </pre>
      <p>
        Variables in <Code>.env.production</Code> wont be available if the app
        is running in development:
      </p>
      <pre>
        <code>npm run dev</code>
      </pre>
      <p>
        Similarly, variables in <Code>.env.development</Code> wont be available
        if the app is running on production:
      </p>
      <pre>
        <code>npm run build && npm run start</code>
      </pre>
      <p>Once you run the app, you will see logs like these in the terminal:</p>
      <pre>
        <code>
          info - Loaded env from /home/user/../.env.local{'\n'}
          info - Loaded env from /home/user/../.env.development{'\n'}
          info - Loaded env from /home/user/../.env{'\n'}
        </code>
      </pre>
      <p>
        The order is important, the first loaded env will have a higher
        priority.
      </p>
      <p>
        <Code>.env</Code> will not overwrite any variables defined in{' '}
        <Code>.env.local</Code> or <Code>.env.development</Code>.
      </p>
    </div>
  </div>
)

export default IndexPage