Primeiro instale o `jest` e suas tipagens como dependência do projeto:

```bash
  yarn add jest @types/jest ts-jest -D
```

Em seguida execute o comando abaixo para inicializar as configurações do `jest`:

```bash
  yarn jest --init

  # 1 - Would you like to use Jest when running "test" script in "package.json"?
  # R: Yes

  # 2 - Would you like to use Typescript for the configuration file?
  # R: Yes

  # 3 -  Choose the test environment that will be used for testing
  # R: node

  # 4 -  Do you want Jest to add coverage reports?
  # R: No

  # 5 - Which provider should be used to instrument code for coverage?
  # R: v8

  # 6 - Automatically clear mock calls, instances, contexts and results before every test?
  # R: Yes
```

Ao terminar de responder o questionário, será criado um arquivo `jest.config.ts` na raiz do projeto. Cole o seguinte código neste arquivo:

```ts
export default {
  // Para a execução dos tests no primeiro erro que encontrar
  bail: true,

  // Limpe automaticamente chamadas simuladas, instâncias,
  // contextos e resultados antes de cada teste
  clearMocks: true,

  // Indica qual provedor deve ser usado para instrumentar
  // o código para cobertura
  coverageProvider: 'v8',

  // Uma predefinição que é usada como base para a configuração do Jest
  preset: 'ts-jest',

  // Os padrões glob que Jest usa para detectar arquivos de teste
  testMatch: ['**/*.spec.ts'],

  // Os caminhos para módulos que executam algum código para configurar ou configurar o ambiente de teste antes de cada teste
  setupFiles: ['<rootDir>/.jest/setEnvVars.ts'],
};
```
