define({ "api": [
  {
    "type": "Get",
    "url": "/api/v1/jogador",
    "title": "Consultar Jogadores",
    "version": "0.0.1",
    "group": "Jogador",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>querystring; id do jogador</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"juca\",\n   \"cpf\": \"11578855111\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao consultar jogador.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/jogador.js",
    "groupTitle": "Jogador",
    "name": "GetApiV1Jogador"
  },
  {
    "type": "Get",
    "url": "/api/v1/jogador/torneio/",
    "title": "Retorna Score Jogador em um torneio / etapa",
    "version": "0.0.1",
    "group": "Jogador",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idjogador",
            "description": "<p>id do jogador</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idtorneio",
            "description": "<p>id do torneio</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idetapa",
            "description": "<p>id da etapa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 11,\n   \"idtorneio\": 1,\n   \"nometorneio\": \"torneio mensal\",\n   \"idetapa\": 1,\n   \"nomeetapa\": \"etapa 3\",\n   \"idjogador\": 1,\n   \"nomejogador\": \"juca2\",\n   \"score\": 2\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao retornar score.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/jogador.js",
    "groupTitle": "Jogador",
    "name": "GetApiV1JogadorTorneio"
  },
  {
    "type": "Post",
    "url": "/api/v1/jogador",
    "title": "Gravar Jogadores",
    "version": "0.0.1",
    "group": "Jogador",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do jogador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>cpf do jogador</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"juca\",\n   \"cpf\": \"11578855111\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar jogador.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/jogador.js",
    "groupTitle": "Jogador",
    "name": "PostApiV1Jogador"
  },
  {
    "type": "Post",
    "url": "/api/v1/jogador/torneio/",
    "title": "Gravar Score Jogador",
    "version": "0.0.1",
    "group": "Jogador",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idjogador",
            "description": "<p>id do jogador</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idetorneio",
            "description": "<p>id do torneio</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idetapa",
            "description": "<p>id da etapa</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score da etapa (será somado ao score já existente)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 11,\n   \"idtorneio\": 1,\n   \"nometorneio\": \"torneio mensal\",\n   \"idetapa\": 1,\n   \"nomeetapa\": \"etapa 3\",\n   \"idjogador\": 1,\n   \"nomejogador\": \"juca2\",\n   \"score\": 2\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar score.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/jogador.js",
    "groupTitle": "Jogador",
    "name": "PostApiV1JogadorTorneio"
  },
  {
    "type": "Get",
    "url": "/api/v1/etapa",
    "title": "Consultar etapas",
    "version": "0.0.1",
    "group": "etapa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>querystring; id da etapa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"etapa 1\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao consultar etapa.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/etapa.js",
    "groupTitle": "etapa",
    "name": "GetApiV1Etapa"
  },
  {
    "type": "Post",
    "url": "/api/v1/etapa",
    "title": "Gravar etapas",
    "version": "0.0.1",
    "group": "etapa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do etapa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"etapa 1\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar etapa.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/etapa.js",
    "groupTitle": "etapa",
    "name": "PostApiV1Etapa"
  },
  {
    "type": "Get",
    "url": "/api/v1/torneio",
    "title": "Consultar torneios",
    "version": "0.0.1",
    "group": "torneio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>querystring; id do torneio</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"torneio anual\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao consultar torneio.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/torneio.js",
    "groupTitle": "torneio",
    "name": "GetApiV1Torneio"
  },
  {
    "type": "Get",
    "url": "/api/v1/torneio/torneios",
    "title": "Consultar todos torneios e etapas",
    "version": "0.0.1",
    "group": "torneio",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 7,\n   \"idtorneio\": 1,\n   \"nometorneio\": \"torneio mensal\",\n   \"idetapa\": 1,\n   \"nomeetapa\": \"etapa 3\"\n },\n {\n   \"id\": 8,\n   \"idtorneio\": 2,\n   \"nometorneio\": \"torneio semanal\",\n   \"idetapa\": 1,\n   \"nomeetapa\": \"etapa 3\"\n },\n {\n   \"id\": 9,\n   \"idtorneio\": 2,\n   \"nometorneio\": \"torneio semanal\",\n   \"idetapa\": 2,\n   \"nomeetapa\": \"etapa 1\"\n },\n {\n   \"id\": 10,\n   \"idtorneio\": 2,\n   \"nometorneio\": \"torneio semanal\",\n   \"idetapa\": 3,\n   \"nomeetapa\": \"etapa 2\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao consultar torneio.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/torneio.js",
    "groupTitle": "torneio",
    "name": "GetApiV1TorneioTorneios"
  },
  {
    "type": "Post",
    "url": "/api/v1/torneio",
    "title": "Gravar torneios",
    "version": "0.0.1",
    "group": "torneio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do torneio</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 9,\n   \"nome\": \"torneio anual\",\n   \"created_at\": \"2019-07-03T05:39:36.000Z\",\n   \"updated_at\": \"2019-07-03T05:39:36.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar torneio.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/torneio.js",
    "groupTitle": "torneio",
    "name": "PostApiV1Torneio"
  },
  {
    "type": "Post",
    "url": "/api/v1/torneio/:idtorneio/etapa/:idetapa",
    "title": "Associar torneios e etapas",
    "version": "0.0.1",
    "group": "torneio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idtorneio",
            "description": "<p>id do torneio</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idetapa",
            "description": "<p>id da etapa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"idtorneio\": 1,\n   \"nometorneio\": \"torneio mensal\",\n   \"idetapa\": 1,\n   \"nomeetapa\": \"etapa 3\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro",
          "content": "HTTP/1.1 400 Falha ao gravar torneio etapa.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/torneio.js",
    "groupTitle": "torneio",
    "name": "PostApiV1TorneioIdtorneioEtapaIdetapa"
  }
] });
