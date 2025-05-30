import dataBase from "src/config/database";

export default async function CancellAllTaskExpired() {
  try {
    const now = new Date();
    const tasksToCancel = await dataBase.taskc.findMany({
      where: {
        status: { in: ["Pending", "Working"] },
        finished: { lte: now },
      },
    });

    for (const task of tasksToCancel) {
      const cancelledTask = await dataBase.taskc.update({
        where: { id: task.id },
        data: { status: "Cancelled" },
        select: {
          owner: true,
          title: true,
          id: true,
        },
      });

      console.log(`Tarefa ID ${task.id} foi cancelada por expiração.`);

      if (cancelledTask?.owner) {
        await dataBase.notification.create({
          data: {
            message: `A tarefa "${cancelledTask.title}" foi automaticamente cancelada.`,
            owner: Number(cancelledTask.owner),
            text: `Sua tarefa "${cancelledTask.title}" foi cancelada automaticamente por ultrapassar a data limite.`,
            deeplink: `/tasks/${cancelledTask.id}`, 
            read: false,
            type: "Task",
          },
        });
      }
    }
  } catch (error) {
    console.error("Erro ao cancelar tarefas expiradas:", error);
  }
}
