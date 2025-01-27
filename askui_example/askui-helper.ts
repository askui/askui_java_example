import { UiControlClient, UiController } from 'askui';
import { AskUIAllureStepReporter } from '@askui/askui-reporters';

let aui: UiControlClient;
let controller: UiController;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  // Start the UI Controller
  controller = new UiController({
    /**
     * Optional: Configure the UI Controller
     * port: 6769,
     * host: '127.0.0.1',
     */
  });
  
  // Start the controller
  await controller.start();

  // Build and connect the client
  aui = await UiControlClient.build({
    reporter: new AskUIAllureStepReporter(),
    }
  });

  await aui.connect();
});

beforeEach(async () => {
  /* Uncomment to enable video recording
  await aui.startVideoRecording();
  */
});

afterEach(async () => {
  /* Uncomment to enable video recording
  await aui.stopVideoRecording();
  const video = await aui.readVideoRecording();
  await AskUIAllureStepReporter.attachVideo(video);
  */
});

afterAll(async () => {
  // Disconnect client
  if (aui) {
    await aui.disconnect();
  }
  
  // Stop the controller
  if (controller) {
    await controller.stop();
  }
});

export { aui };
