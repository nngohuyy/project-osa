import { Button, ButtonGroup } from '@nextui-org/react'

export default function Card() {
  return (
    <main>
      <div className="gallery-item">
        <div className="gallery-item-content">
          <div className="image">
          </div>
          <div className="my-4 px-5">
            <h3>BizTech Talk #16: AIvolution</h3>
            <h4>February 02, 2024</h4>
            <p className="my-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla harum laudantium doloremque atque libero, impedit velit, necessitatibus totam asperiores.
            </p>
            <Button
              className="mt-3"
              color="primary"
              size="sm"
              radius="full"
              variant="bordered"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}