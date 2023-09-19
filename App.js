import { NuvoImporter } from "nuvo-react";

const App = () => {
  return (
    <NuvoImporter
      licenseKey="license-key"
      settings={{
        developerMode: true,
        identifier: "product_data",
        enableExamples: true,
        columns: [
          {
            columnType: "category",
            columnSize: 2,
            dropdownOptions: [
              {
                label: "fresh: 0° to 2°C",
                value: "frisch: 0° to 2°C",
                type: "string",
                alternativeMatches: ["2°C"],
              },
              {
                label: "fresh: 1° to 4°C",
                value: "fresh: 1° to 4°C",
                type: "string",
                alternativeMatches: ["4°C"],
              },
              {
                label: "fresh: 1° to 7°C",
                value: "fresh: 1° to 7°C",
                type: "string",
                alternativeMatches: ["7°C"],
              },
              {
                label: "dry: 5° to 25°C",
                value: "dry: 5° to 25°C",
                type: "string",
                alternativeMatches: ["25°C"],
              },
            ],
            description:
              "StoragetemperatureforthecorrespondingproductStoragetemperatureforthecorrespondingproduct",
            key: "storage_temperature",
            label: "Storage temperature",
            example:
              "StoragetemperatureforthecorrespondingproductStoragetemperatureforthecorrespondingproduct",
            validations: [
              {
                validate: "required",
              },
            ],
            alternativeMatches: [
              "first",
              "item1",
              "item2",
              "item3",
              "item4",
              "item5",
            ],
          },
          {
            columnType: "string",
            dropdownOptions: null,
            columnSize: 1,
            description: "Unique product id",
            key: "product_id",
            label: "Product ID",
            validations: [
              {
                validate: "unique",
              },
            ],
            example: "PRO1",
            alternativeMatches: [],
          },
          {
            columnType: "string",
            dropdownOptions: null,
            columnSize: 1,
            description: "the legal retailer name of the product",
            key: "vendor_name",
            label: "Vendor name",
            validations: [
              {
                validate: "required_with",
                columns: ["product_id"],
              },
            ],
            example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            alternativeMatches: [
              "item11",
              "item12",
              "item13",
              "item14",
              "item15",
            ],
          },
          {
            columnType: "string",
            dropdownOptions: null,
            description: "Description for product",
            key: "description",
            label: "Description",
            example: "This product is for blar blar",
            validations: [
              {
                validate: "required_without",
                columns: ["product_id"],
              },
            ],
          },
          {
            columnType: "int",
            dropdownOptions: null,
            description: "Product pack size",
            key: "product_size",
            label: "Product size",
            example: "30",
            validations: [
              {
                validate: "required_without",
                columns: ["product_id"],
              },
            ],
          },
          {
            columnType: "category",
            dropdownOptions: [
              {
                label: "ml",
                value: "ml",
                type: "string",
              },
              {
                label: "g",
                value: "g",
                type: "string",
              },
              {
                label: "kg",
                value: "kg",
                type: "string",
              },
              {
                label: "piece",
                value: "piece",
                type: "string",
              },
            ],
            description: "Product size metric",
            key: "Product_size_metric",
            label: "Product size metric",
            validations: [
              {
                validate: "required_without_all_values",
                columnValues: {
                  storage_temperature: ["fresh: 1° to 7°C"],
                  vendor_name: ["boss"],
                },
                regex: null,
              },
            ],
            example: "piece",
            alternativeMatches: [
              "item21",
              "item22",
              "item23",
              "item24",
              "item25",
            ],
          },
          {
            columnType: "string",
            dropdownOptions: null,
            description: "Calorific value (kcal)",
            key: "calorific_value",
            label: "Calorific value (kcal)",
            validations: [
              {
                validate: "required",
                regex: null,
                errorMessage: "Calorific must be provided",
              },
              {
                validate: "regex",
                columnValues: null,
                regex: "^(([0-9,]+[ ]{1}kcal)|(0))$",
              },
            ],
            example: "20 kcal",
          },
          {
            columnType: "boolean",
            dropdownOptions: null,
            description: "Whether the outer packaging unit has a deposit",
            key: "deposit",
            label: "Deposit of the outer packaging unit",
            validations: [
              {
                validate: "required_without_values",
                columnValues: {
                  Product_size_metric: ["piece", "ml"],
                },
              },
            ],
            example: "",
          },
          {
            columnType: "float",
            description: "Shipping stage",
            key: "dispatch",
            label: "Number of dispatch stage 1",
            example: "20",
          },
          {
            columnType: "int",
            description: "Price in US",
            key: "price_in_us",
            label: "Price in US",
            example: "20$",
          },
          {
            columnType: "string",
            description: "Shipping location",
            key: "shipping_location",
            label: "Shipping location",
            validations: [
              {
                validate: "required_with_values",
                columnValues: {
                  Product_size_metric: ["g", "kg"],
                },
              },
            ],
            example: "USA, Germany",
          },
          {
            columnType: "category",
            dropdownOptions: [
              {
                label: "0,02€",
                value: "0,02",
                type: "float",
              },
              {
                label: "0,03€",
                value: "0,03",
                type: "float",
              },
              {
                label: "0,08€",
                value: "0,08",
                type: "float",
              },
              {
                label: "0,15€",
                value: "0,15",
                type: "float",
              },
              {
                label: "0,25€",
                value: "0,25",
                type: "float",
              },
            ],
            description: "Deposit per unit applies to your product.",
            key: "deposit_per_unit",
            label: "Deposit per unit",
            validations: [
              {
                validate: "required_without_all",
                columns: ["storage_temperature", "Product_size_metric"],
                regex: null,
              },
            ],
            example: "0,02€",
          },
          {
            columnType: "string",
            description: "More information",
            key: "note",
            label: "Note",
            validations: [
              {
                validate: "required_with_all_values",
                columnValues: {
                  Product_size_metric: ["g", "kg"],
                  vendor_name: ["test", "foo", "bar"],
                },
              },
            ],
            example: "Blar Blar anything",
          },
        ],
        modal: true,
        embedUploadArea: true,
        multipleFileUpload: true,
        style: {
          buttons: {
            primary: {
              backgroundColor: "#143a52",
              borderColor: "#143a52",
              color: "#ffffff",
              padding: "4px 11px",
              fontSize: "16px",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "#24516D",
                borderColor: "#ffffff",
              },
              ":active": {
                backgroundColor: "##0C3046",
                borderColor: "#ffffff",
              },
            },
            secondary: {
              backgroundColor: "#ffffff",
              borderColor: "#143a52",
              color: "#143a52",
              padding: "4px 11px",
              fontSize: "16px",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "#ffffff",
                borderColor: "#24516D",
                color: "#24516D",
              },
              ":active": {
                backgroundColor: "#FFFFFF",
                borderColor: "#0C3046",
                color: "#0C3046",
              },
            },
          },
          progressBar: {
            root: {
              backgroundColor: "grey",
              borderRadius: "7px",
              border: "1px solid white",
              padding: "20px",
            },
            icon: {
              fill: "red",
            },
            current: {
              color: "darkblue",
              fontSize: "18px",
              fontWeight: "600",
            },
            complete: {
              color: "green",
            },
            incomplete: {
              color: "yellow",
            },
          },
          header: {
            root: {
              backgroundColor: "#E1E1E1",
            },
            title: {
              color: "darkblue",
              fontSize: "10px",
            },
            description: {
              color: "black",
              fontSize: "8px",
            },
          },
          dropzone: {
            root: {
              backgroundColor: "#E1E1E1",
              border: "1px solid black",
            },
            icon: {
              box: {
                fill: "black",
              },
            },
            content: {
              root: {
                backgroundColor: "#E1E1E1",
                border: "1px solid black",
                borderRadius: "20px",
                padding: "40px 60px",
              },
              title: {
                color: "darkblue",
              },
              description: {
                color: "green",
              },
              illustration: {
                borderColor: "red",
                headerColor: "green",
                circleHeaderColor: "blue",
                circleRowColor: "brown",
                downloadIconColor: "gray",
                shadowColor: "#E0EAFD",
              },
            },
          },
          footer: {
            root: {
              backgroundColor: "#E1E1E1",
            },
          },
          sheetSelect: {
            root: {
              backgroundColor: "#E1E1E1",
              border: "1px solid black",
            },
            header: {
              color: "red",
            },
            sheetName: {
              root: {
                backgroundColor: "yellow",
              },
              title: {
                color: "green",
              },
              description: {
                color: "orange",
              },
              border: {
                backgroundColor: "#143a52",
              },
            },
            grid: {
              root: {
                backgroundColor: "yellow",
              },
              title: {
                color: "green",
              },
              description: {
                color: "orange",
              },
              checkbox: {
                ":checked": {
                  backgroundColor: "red",
                },
              },
            },
            list: {
              root: {
                backgroundColor: "yellow",
              },
              title: {
                color: "green",
              },
              checkbox: {
                ":checked": {
                  backgroundColor: "red",
                },
              },
            },
            pagination: {
              currentPageButton: {
                backgroundColor: "red",
                color: "white",
              },
            },
            icon: {
              stroke: "red",
            },
          },
          headerSelect: {
            root: {
              borderRadius: "20px",
            },
            content: {
              fontSize: "12px",
              color: "red",
            },
            sheetName: {
              root: {
                backgroundColor: "grey",
                borderRadius: "5px",
                padding: "8px",
              },
              title: {
                color: "orange",
              },
              description: {
                color: "yellow",
              },
              border: {
                backgroundColor: "#143a52",
              },
            },
            fullScreen: {
              root: {
                width: 200,
              },
              icon: {
                stroke: "red",
              },
            },
            table: {
              th: {
                backgroundColor: "#E1E1E1",
                borderColor: "black",
                color: "yellow",
              },
              td: {
                backgroundColor: "#f2f2f2",
                borderColor: "black",
              },
              scrollbar: {
                navigatorColor: "#4b357f",
                backgroundColor: "#e9e6ef",
              },
              selectRowColor: "yellow",
            },
          },
          columnMatch: {
            root: {
              color: "blueviolet",
              borderColor: "red",
            },
            icon: {
              color: "black",
            },
            matchingTitle: {
              root: {
                backgroundColor: "tomato",
              },
              icon: {
                color: "green",
              },
              checkIcon: {
                color: "chocolate",
              },
            },
            matchingPercent: {
              root: {
                backgroundColor: "green",
                color: "yellow",
              },
              icon: {
                color: "pink",
              },
            },
            notMatchingValue: {
              root: {
                backgroundColor: "green",
                color: "red",
              },
              icon: {
                color: "red",
              },
            },
            columnMatchHeader: {
              root: {
                backgroundColor: "burlywood",
                borderColor: "tomato",
                color: "burlywood",
              },
              icon: {
                stroke: "yellow",
              },
              dropdown: {
                scrollbar: {
                  backgroundColor: "purple",
                  navigatorColor: "pink",
                },
                search: {
                  placeholder: "red",
                },
                root: {
                  backgroundColor: "salmon",
                  color: "darkblue",
                  borderColor: "blue",
                },
                selectedOption: {
                  backgroundColor: "green",
                  ":hover": {
                    backgroundColor: "yellow",
                  },
                },
                button: {
                  placeholder: "yellow",
                  root: {
                    backgroundColor: "tomato",
                  },
                  icon: {
                    color: "black",
                  },
                },
                header: {
                  backgroundColor: "gold",
                  color: "navy",
                },
                option: {
                  color: "yellow",
                  ":hover": {
                    backgroundColor: "pink",
                    color: "blue",
                  },
                },
                badge: {
                  root: {
                    backgroundColor: "blue",
                    color: "white",
                    ":hover": {
                      backgroundColor: "yellow",
                      color: "gold",
                    },
                  },
                  icon: {
                    color: "purple",
                  },
                },
              },
            },
            columnMatchValue: {
              root: {
                backgroundColor: "lemonchiffon",
                borderColor: "red",
                color: "blue",
              },
              emptyValue: {
                color: "gold",
              },
              icon: {
                stroke: "red",
              },
              dropdown: {
                root: {
                  backgroundColor: "salmon",
                  color: "darkblue",
                  borderColor: "red",
                },
                scrollbar: {
                  backgroundColor: "purple",
                  navigatorColor: "pink",
                },
                selectedOption: {
                  backgroundColor: "navy",
                },
                option: {
                  ":hover": {
                    backgroundColor: "pink",
                    color: "blue",
                  },
                },
                button: {
                  placeholder: "yellow",
                  root: {
                    backgroundColor: "tomato",
                  },
                  icon: {
                    color: "chocolate",
                  },
                },
              },
            },
            requiredColumns: {
              title: {
                color: "red",
              },
              showMore: {
                root: {
                  backgroundColor: "yellow",
                },
                badge: {
                  backgroundColor: "blue",
                  color: "yellow",
                },
                text: {
                  color: "purple",
                  fontSize: 24,
                },
                icon: {
                  stroke: "blue",
                },
              },
              notMatchErrorIcon: {
                stroke: "green",
              },
              notMatchError: {
                color: "blue",
              },
              hasMatchIcon: {
                stroke: "purple",
              },
              hasMatch: {
                color: "yellow",
              },
              notMatch: {
                color: "purple",
              },
              notMatchIcon: {
                color: "black",
              },
            },
          },
          reviewEntries: {
            switchError: {
              label: {
                color: "red",
                fontSize: 20,
              },
              badge: {
                backgroundColor: "orange",
                color: "black",
              },
            },
            selectRowColor: "orange",
            selectedBackground: {
              normal: "yellow",
            },
            fullScreen: {
              root: {
                width: 200,
              },
              icon: {
                stroke: "red",
              },
            },
            infoIcon: {
              color: "orange",
              ":hover": {
                color: "blue",
              },
            },
            edit: {
              category: {
                item: {
                  option: {
                    backgroundColor: "red",
                    ":hover": {
                      color: "blue",
                    },
                  },
                  selectedOption: {
                    backgroundColor: "blue",
                  },
                },
                button: {
                  arrowIcon: {
                    color: "yellow",
                  },
                  closeIcon: {
                    color: "yellow",
                  },
                },
              },
              string: {
                backgroundColor: "blue",
              },
              boolean: {
                item: {
                  option: {
                    backgroundColor: "red",
                  },
                  selectedOption: {
                    backgroundColor: "blue",
                  },
                },
                button: {
                  arrowIcon: {
                    color: "red",
                  },
                  closeIcon: {
                    color: "red",
                  },
                },
              },
            },
            table: {
              scrollbar: {
                backgroundColor: "red",
                navigatorColor: "blue",
              },
              dragStyle: {
                color: "orange",
                style: "solid",
              },
              th: {
                borderColor: "blue",
                backgroundColor: "yellow",
              },
              td: {
                root: {
                  borderColor: "grey",
                },
                warning: {
                  backgroundColor: "yellow",
                  color: "black",
                },
                error: {
                  backgroundColor: "red",
                  color: "white",
                },
                info: {
                  backgroundColor: "blue",
                  color: "red",
                },
                normal: {
                  backgroundColor: "green",
                  color: "red",
                },
              },
            },
          },
          dialog: {
            root: {
              backgroundColor: "yellow",
            },
            overlay: {
              backgroundColor: "white",
            },
            closeIcon: {
              stroke: "red",
            },
          },
          messagePopup: {
            root: {
              backgroundColor: "green",
            },
            overlay: {
              backgroundColor: "blue",
            },
            title: {
              color: "red",
            },
            description: {
              color: "blue",
            },
            warnIcon: {
              stroke: "red",
            },
            successIcon: {
              stroke: "red",
            },
            closeIcon: {
              stroke: "blue",
            },
          },
          popoverInfo: {
            backgroundColor: "white",
            color: "red",
          },
          loader: {
            root: {
              backgroundColor: "#f2f2f2",
            },
            content: {
              color: "green",
            },
            loadAnimationColor: "green",
          },
        },
      }}
      onResults={(result) => console.log("Result:", result)}
      columnHooks={{
        storage_temperature: (hookedRecordValues) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                hookedRecordValues.map(([_, rowIndex]) => {
                  return [
                    {
                      info: [
                        {
                          level: "warning",
                          message: "this is warn message",
                        },
                      ],
                    },
                    rowIndex,
                  ];
                })
              );
            }, 0);
          });
        },
        deposit: (hookedRecordValues) => {
          return [];
        },
        product_size: () => {
          return [
            [
              {
                value: 200,
                info: [
                  {
                    level: "error",
                    message: "this is error message",
                  },
                ],
              },
              2,
            ],
            [
              {
                value: 400,
                info: [
                  {
                    level: "error",
                    message: "this is error message",
                  },
                ],
              },
              4,
            ],
          ];
        },
      }}
      onEntryInit={(row, rowIndex) => {
        return new Promise((resolve, _) => {
          resolve({
            storage_temperature: {
              info: [
                {
                  level: "warning",
                  message: "onEntryInit",
                },
              ],
            },
            vendor_name: {
              value: "test",
              info: [
                {
                  level: "info",
                  message: "onEntryInit",
                },
              ],
            },
            deposit: {
              info: [
                {
                  level: "warning",
                  message: "onEntryInit",
                },
              ],
              value: "test",
            },
            calorific_value: {
              info: [
                {
                  level: "error",
                  message: "onEntryInit",
                },
              ],
              value: "test kcal",
            },
          });
        });
      }}
    >
      Select File
    </NuvoImporter>
  );
};

export default App;
