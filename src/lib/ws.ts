type Listener<T> = (payload: T) => void;

type EventMap = {
  like: { postId: string; likes: number };
  comment: { postId: string; commentCount: number };
};

type EventName = keyof EventMap;
type ListenerMap = { [K in EventName]: Listener<EventMap[K]>[] };

export class MockRealtimeClient {
  private listeners: ListenerMap = {
    like: [],
    comment: [],
  };

  on<K extends EventName>(event: K, listener: Listener<EventMap[K]>) {
    this.listeners[event].push(listener);
    return () => this.off(event, listener);
  }

  off<K extends EventName>(event: K, listener: Listener<EventMap[K]>) {
    const list = this.listeners[event];
    const index = list.indexOf(listener);
    if (index > -1) {
      list.splice(index, 1);
    }
  }

  emit<K extends EventName>(event: K, payload: EventMap[K]) {
    this.listeners[event].forEach((listener) => listener(payload));
  }
}

let client: MockRealtimeClient | null = null;

export function getRealtimeClient() {
  if (!client) {
    client = new MockRealtimeClient();
  }
  return client;
}
