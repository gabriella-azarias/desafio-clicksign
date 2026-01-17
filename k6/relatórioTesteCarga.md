# Relatório de Teste de Carga – API JSONPlaceholder

## 1. Contexto

* **API testada:** [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
* **Endpoint:** `GET /posts`
* **Ferramenta:** k6
* **Tipo de teste:** Teste de carga com ramping-up
* **Carga máxima:** 20 VUs (Virtual Users)
* **Total de requisições:** 1120

---

## 2. Objetivo do teste

Avaliar o comportamento do endpoint sob carga concorrente, analisando:

* Tempo de resposta
* Taxa de erro
* Throughput (requisições por segundo)

Além disso, identificar possíveis gargalos de performance.

---

## 3. Métricas coletadas

### 3.1 Tempo de resposta

* **Tempo médio:** ~208 ms
* **p90:** ~213 ms
* **p95:** ~228 ms
* **Tempo máximo:** ~444 ms

**Análise:**
A maior parte das requisições respondeu em menos de 230 ms. Mesmo no pior cenário, o tempo de resposta permaneceu abaixo de 500 ms, indicando boa estabilidade do endpoint sob a carga aplicada.

---

### 3.2 Taxa de erro

* **Taxa de erro:** 0%
* **Checks executados:**

  * Status HTTP 200
  * Content-Type application/json
  * Presença de conteúdo no corpo da resposta

**Análise:**
Todas as requisições passaram nos checks definidos, não sendo observadas falhas funcionais durante o teste.

---

### 3.3 Throughput

* **Requisições por segundo:** ~9,28 req/s
* **Volume médio de dados recebidos:** ~258 KB/s

**Análise:**
O throughput manteve-se estável durante o pico de usuários simultâneos, indicando que o serviço conseguiu processar as requisições sem degradação significativa.

---

## 4. Identificação de possíveis gargalos

Com base nas métricas observadas:

* A maior parte do tempo de resposta está concentrada no **tempo de espera (TTFB / http_req_waiting)**, sugerindo latência do servidor ou da rede como principal fator.
* O endpoint retorna uma **lista completa de posts**, aumentando o volume de dados transferidos e impactando o throughput.
* Em um cenário real, cargas maiores poderiam exigir:

  * Paginação das respostas
  * Uso de cache
  * Redução do payload

---

## 5. Conclusão

O endpoint `GET /posts` apresentou bom desempenho e estabilidade durante o teste de carga, mantendo baixa latência, taxa de erro nula e throughput consistente até 20 usuários simultâneos. Não foram identificados gargalos críticos no cenário testado, porém o tamanho da resposta e o tempo de espera do servidor se destacam como possíveis pontos de otimização para ambientes com maior volume de acesso.
