import {Button} from "./components/button";

export default function Home() {
  return (
      <main className="p-20 flex items-center flex-col min-h-screen w-screen">
          <h1 className={"font-bold m-4"}>Flavours:</h1>
          <div className="flex flex-row gap-4 items-center">
              <Button flavour="primary"> Primary </Button>
              <Button flavour="success"> Success </Button>
              <Button flavour="warning"> Warning </Button>
              <Button flavour="danger"> Danger </Button>
              <Button flavour="inverse"> Inverse </Button>
              <Button flavour="purple"> Purple </Button>
          </div>

          <h1 className={"font-bold m-4"}>Sizes:</h1>
          <div className="flex flex-row gap-4 items-center">
              <Button flavour="primary" size="small"> Small </Button>
              <Button flavour="success" size="medium"> Medium </Button>
              <Button flavour="warning" size="large"> Large </Button>
              <Button flavour="danger" size="xl"> Extra Large </Button>
          </div>

          <h1 className={"font-bold m-4"}>Roundness:</h1>
          <div className="flex flex-row gap-4 items-center">
              <Button flavour="primary" roundness='square'> Square </Button>
              <Button flavour="success" roundness='small'> Small </Button>
              <Button flavour="warning" roundness='base'> Base </Button>
              <Button flavour="danger" roundness='medium'> Medium </Button>
              <Button flavour="inverse" roundness='large'> Large </Button>
              <Button flavour="purple" roundness='xl'> XL </Button>
              <Button flavour="primary" roundness='2xl'> 2XL </Button>
              <Button flavour="success" roundness='circular'> Circular </Button>
          </div>
      </main>
  );
}
