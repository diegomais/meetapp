import Meetup from '../models/Meetup';
import File from '../models/File';

class HostController {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;
      const itemsPerPage = 10;

      const meetups = await Meetup.findAll({
        where: { user_id: req.userId, canceled_at: null },
        order: ['date'],
        attributes: ['id', 'date', 'title', 'description', 'location'],
        limit: itemsPerPage,
        offset: (page - 1) * itemsPerPage,
        include: [
          {
            model: File,
            as: 'banner',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });

      return res.json(meetups);
    } catch (err) {
      return res.status(404).json({
        error: 'Meetups not found, try again.',
      });
    }
  }

  async show(req, res) {
    try {
      const meetup = await Meetup.findByPk(req.params.id, {
        include: [
          { model: File, as: 'banner', attributes: ['id', 'path', 'url'] },
        ],
      });

      // Check authenticated user differ from meetup host
      if (meetup.user_id !== req.userId) {
        return res.status(403).json({
          error: 'You are not allowed to edit this meetup.',
        });
      }

      if (!meetup) {
        return res.status(404).json({ error: 'Meetup not found.' });
      }

      return res.json(meetup);
    } catch (error) {
      return res.status(404).json({
        error: 'Meetup not found, try again.',
      });
    }
  }
}

export default new HostController();
