# Maestro POC

PoC simples de testes automatizados de UI mobile usando o [Maestro](https://maestro.mobile.dev/).

## Conteúdo

- `Teste-Mobile.yaml` e `teste2.yaml` — fluxos de teste do Maestro para o app `com.example.cadastroapp`
- `apk/` — pasta onde deve ser colocado o APK do app (`apk/app.apk`) usado pelos testes
- `.github/workflows/maestro-tests.yml` — pipeline do GitHub Actions que roda os fluxos em um emulador Android

## Como rodar localmente

1. [Instale o Maestro CLI](https://maestro.mobile.dev/getting-started/installing-maestro)
2. Com um emulador/dispositivo conectado e o app instalado, rode:

```sh
maestro test .
```
