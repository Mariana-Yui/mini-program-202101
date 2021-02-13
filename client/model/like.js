import HTTP from '../utils/http';

class LikeModel extends HTTP {
  async like(behavior, artId, category) {
    const url = behavior === 'like' ? '/like' : '/like/cancel';
    const res = await this.request({
      url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category,
      },
    });
    return res;
  }
  
  async getClassicLikeStatus(artId, category) {
    const res = await this.request({
      url: `/classic/${category}/${artId}/favor`
    });
    return res;
  }
}

export default LikeModel;
