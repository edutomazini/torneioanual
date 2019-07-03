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
          "content": "HTTP/1.1 400 Falha ao consultar compras.",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/rest/jogador.js",
    "groupTitle": "Jogador",
    "name": "GetApiV1Jogador"
  }
] });