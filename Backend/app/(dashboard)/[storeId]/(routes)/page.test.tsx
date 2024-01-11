import SettingsPage from "./page";

test("SettingsPage redirects to home if specified store doesn't belong to the user", async () => {
  const params = {
    storeId: "123456",
  };

  const otherUserId = "987654";
  jest.mock("@clerk/nextjs", () => ({
    auth: {
      userId: otherUserId,
    },
  }));

  jest.mock("@/lib/prismadb", () => ({
    store: {
      findFirst: async () => Promise.resolve({ id: "123456" }),
    },
  }));

  try {
    await SettingsPage({ params });
  } catch (error) {
    expect(error).toBe("You don't have access to this store's settings.");
  }
});
