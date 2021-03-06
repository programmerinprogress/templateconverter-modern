 {
    "placeholders": [
        {
            "name": "[[totalprice]]",
            "scope": "item",
            "razor": "totalprice",
            "code": "var totalpricedouble = 0.00; totalpricedouble = @product.Price * @product.Quantity; var totalprice = Math.Round(totalpricedouble, 2).ToString(\"0.00\");"
        },
        {
            "name": "[[webview]]",
            "scope": "none",
            "legacy": true
        },
        {
            "name": "[[unsubscribe]]",
            "scope": "none",
            "legacy": true
        },
        {
            "name": "[[customername]]",
            "scope": "session",
            "razor": "salutation",
            "code": "var salutation = \"Dear Customer,\"; if(Model.Customer != null && string.IsNullOrEmpty(Model.Customer.FirstName) == false) { salutation = String.Format(\"Dear {0},\", Model.Customer.FirstName); }"
        },
        {
            "name": "[[totalvalue]]",
            "scope": "session",
            "razor": "Model.BasketValue"

        },
        {
            "name": "[[itemimage]]",
            "scope": "item",
            "razor": "product.ImageUrl"

        },
         {
             "name": "[[itemname]]",
             "scope": "item",
             "razor": "product.Name"

         },
          {
              "name": "[[itemvalue]]",
              "scope": "item",
              "razor": "product.Price"

          },
          {
              "name": "[[itemquantity]]",
              "scope": "item",
              "razor": "product.Quantity"

          },
           {
               "name": "[[itemquantity1]]",
               "scope": "item",
               "razor": "product.Quantity"

           },
           {
               "name": "[[itemcurrency]]",
               "scope": "session",
               "razor": "itemcurrency",
               "code": "var itemcurrency = @TryGetSessionField(\"cur\");",
               "comment": "note that this isnt a standard placeholder, you have to define this in your script as a session placeholder"

           },
             {
                 "name": "[[currencysymbol]]",
                 "scope": "session",
                 "razor": "currencysymbol",
                 "code": "var itemcurrency = @TryGetSessionField(\"cur\");",
                 "comment": "note that this isnt a standard placeholder, you have to define this in your script as a session placeholder"

             },
           {
               "name": "[[customfield1]]",
               "scope": "item",
               "razor": "customfield1",
               "code": "var customfield1 = @TryGetItemField(@product, \"f1\");"

           }


    ]
}